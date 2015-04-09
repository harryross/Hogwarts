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
            if (_index == -1)
            {
                return;
            }
            int temp = 0;
            string subs = "";
            _index = json.IndexOf('\'', _index);
            temp = json.IndexOf('\'', _index + 1);
            subs = json.Substring(_index + 1, temp - 1 - _index);
            _schemaBuilder += "'" + subs + "':";
            if (json.IndexOf('\'', temp+1) > json.IndexOf('{', temp) && json.IndexOf('{', temp) > 0)
            {
                GenerateJsonObject(json);
            }
            else if ((json.IndexOf('\'', temp + 1) > json.IndexOf('[', temp) && json.IndexOf('[', temp) > 0))
            {
                GenerateJsonArray(json);
            }
            else
            {
                _schemaBuilder += "{'type': 'string', 'required': true}";
            }
            if (_index == -1)
            {
                return;
            }
            if (json.IndexOf(',', _index) < json.IndexOf('}', _index) && json.IndexOf(',', _index) > 0)
            {
                _schemaBuilder += ",";
                _index = json.IndexOf(',', _index);
                GetJsonSubObject(json);
            }
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