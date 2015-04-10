using System.Data.Odbc;
using Hogwarts.Api.Models;

namespace Hogwarts.Api.Command
{
    public class ConvertFromObjectToSchema
    {
        private static int _index = 0;
        private int _indent = 0;
        private string _schemaBuilder;
        public string GetJsonSchema(JsonObject json)
        {
            _schemaBuilder = "";
            _index = 0;
            _indent = 0;
            StartSchema(json.JsonObjectBody);
            return _schemaBuilder;
        }

        private void GetName(string json)
        {
            int temp = 0;
            string subs = "";
            _index = json.IndexOf('\'', _index);
            temp = json.IndexOf('\'', _index + 1);
            subs = json.Substring(_index + 1, temp - 1 - _index);
            _schemaBuilder += "'" + subs + "':";
            
        }

        private void InitiateObject(string json)
        {
            _schemaBuilder += "{";
            _schemaBuilder += "'type': 'object',";
            _schemaBuilder += "'required': true,";
            _schemaBuilder += "'properties': {";
        }

        private void StartSchema(string json)
        {
            _schemaBuilder += "{";
            while (true)
            {
                if (json.IndexOf('\'', _index) < json.IndexOf('}', _index) && json.IndexOf('\'', _index) > 0)
                {
                    GetName(json);
                    _index = json.IndexOf(':', _index);
                }
                if (json.IndexOf('{', _index) < json.IndexOf('\'', _index) && json.IndexOf('{', _index) > 0)
                {
                    InitiateObject(json);
                    _index = json.IndexOf('{', _index);
                } else if (json.IndexOf('}', _index) != _index && json.IndexOf('{', _index) != _index)
                {
                    GetObjectType(json);
                    
                }
                if (json.IndexOf(',', _index) < json.IndexOf('}', _index) && json.IndexOf(',', _index) > 0 && json.IndexOf('{', _index) != _index)
                {
                    _schemaBuilder += ",";
                    _index = json.IndexOf(',', _index);
                }
                else if (json.IndexOf('{', _index) != _index)
                {
                    _index = json.IndexOf('}', _index) + 1;
                    if (_index >= json.Length)
                    {
                        _schemaBuilder += "}";
                        break;
                    } else
                    {
                        _schemaBuilder += "}}";
                    }
                    if (json.IndexOf(',', _index) == _index && json.IndexOf('}', _index - 1) == _index - 1)
                    {
                        _schemaBuilder += ",";
                        _index++;
                    }
                }
                
                if (_index < 0 || _index >= json.Length)
                {
                    break;
                }
                
            }
            _schemaBuilder += "";
        }

        private void GetObjectType(string json)
        {
            _schemaBuilder += "{'type': 'string', 'required': true}";
        }
    }
}