using System;
using System.Collections.Generic;
using System.Data.Odbc;
using System.Linq;
using System.Text.RegularExpressions;
using Hogwarts.Api.Helpers;
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
            json.JsonObjectBody.Replace(" ", "");
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
            int endoftype = 0;
            if (json.IndexOf(',', _index) < json.IndexOf('}', _index))
            {
                if (json.IndexOf(',', _index) == -1)
                {
                    endoftype = json.IndexOf('}', _index);
                }
                else
                {
                    endoftype = json.IndexOf(',', _index);
                }
            }
            else
            {
                endoftype = json.IndexOf('}', _index);
            }
            string type = json.Substring(_index + 1, endoftype - 1 - _index);
            type = type.Replace(" ", string.Empty);
            string property = PropertyType.GetType(type);
            _schemaBuilder += "{'type': '"+property+"', 'required': true}";
        }


        public IEnumerable<JsonProperty> GetArrayProperties(string jsonArray)
        {
            var arrayElementsProcessed = 0;
            var arrayProperties = new List<JsonProperty>();
            var cursor = jsonArray.IndexOf('{');

            while (jsonArray.IndexOf(',', cursor) != -1)
            {
                var startIdx = jsonArray.IndexOf('{', cursor);
                var endIdx = jsonArray.IndexOf('}', cursor + 1);
                string[] properties = jsonArray.Substring(startIdx + 1, endIdx - startIdx - 1).Trim().Split(',');

                foreach (var property in properties)
                {
                    var details = property.Split(':');
                    
                    arrayProperties.Add(
                        new JsonProperty
                        {
                            Title = details[0],
                            Type = PropertyType.GetType(details[1])
                        }
                    );
                }

                arrayElementsProcessed++;
                cursor = endIdx;
            }

            // Get the distinct properties
            var distinctProperties = arrayProperties.GroupBy(p => p.Title).Select(grp => grp.First()).ToList();
            // Assign the IsRequired value
            for (int i = 0; i < distinctProperties.Count(); i++)
            {
                var count = arrayProperties.Count(p => p.Title == distinctProperties[i].Title);
                distinctProperties[i].IsRequired = count == arrayElementsProcessed;
            }

            return distinctProperties;
        }

        private string BuildArrayString(string jsonArray)
        {
            var properties = GetArrayProperties(jsonArray);
            throw new NotImplementedException();
        }
    }
}