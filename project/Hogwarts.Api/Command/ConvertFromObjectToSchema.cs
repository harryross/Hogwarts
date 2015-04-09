using System.Data.Odbc;
using Hogwarts.Api.Models;

namespace Hogwarts.Api.Command
{
    public class ConvertFromObjectToSchema
    {
        private static int _index = 0;
        private string _schemaBuilder;
        public string GetJsonSchema(JsonObject json)
        {
            _schemaBuilder = "";
            _index = 0;
            GenerateSchema(json.JsonObjectBody);
            return _schemaBuilder;
        }


        private void GenerateSchema(string json)
        {
            _schemaBuilder += "{";
            GetJsonSubObject(json);
            _schemaBuilder += "}";
        }

        private void GetJsonSubObject(string json)
        {
            int temp = 0;
            string subs = "";
            _index = json.IndexOf('\'', _index);
            temp = json.IndexOf('\'', _index + 1);
            subs = json.Substring(_index + 1, temp - 1 - _index);
            _schemaBuilder += "'" + subs + "':";
            if (json.IndexOf('\'', temp+1) > json.IndexOf('{', temp) && json.IndexOf('{', temp) > 0)
            {
                _index = json.IndexOf('{', _index);
                GenerateJsonObject(json);
            }
            else if ((json.IndexOf('\'', temp + 1) > json.IndexOf('[', temp) && json.IndexOf('[', temp) > 0))
            {
                _index = json.IndexOf('[', _index);
                GenerateJsonArray(json);
            }
            else
            {
                _index = json.IndexOf('\'', _index+1);
                _index = json.IndexOf('\'', _index+1);
                _index = json.IndexOf('\'', _index+1);
                _schemaBuilder += "{'type': 'string', 'required': true}";
            }
            if (IsThereAComma(json))
            {
                _schemaBuilder += ",";
                _index = json.IndexOf(',', _index);
                GetJsonSubObject(json);
            }
            else
            {
                //_index = json.IndexOf('}', _index)+1;
            }
        }

        private bool IsThereAComma(string json)
        {
            int indexOfBracket = json.IndexOf('}', _index);
            int indexOfComma = json.IndexOf(',', _index);
            return indexOfBracket > indexOfComma;
        }

        private void GenerateJsonArray(string json)
        {
            _schemaBuilder += "'type': 'array',";
            _schemaBuilder += "'items': [";
            GenerateSchema(json);
            _schemaBuilder += "]";
        }

        private void GenerateJsonObject(string json)
        {
            _schemaBuilder += "{";
            _schemaBuilder += "'type': 'object',";
            _schemaBuilder += "'required': true,";
            _schemaBuilder += "'properties': ";
            _index = json.IndexOf('{', _index);
            GenerateSchema(json);
            _schemaBuilder += "}";
        }
    }
}