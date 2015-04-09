using Hogwarts.Api.Models;
using Newtonsoft.Json.Schema;

namespace Hogwarts.Api.Command
{
    public class ConvertFromObjectToSchema
    {
        private static int index = 0;
        private string _schemaBuilder;
        public string GetJsonSchema(JsonObject json)
        {
            var result = JsonSchema.Parse(json.JsonObjectBody);
            var generator = new JsonSchemaResolver();
            _schemaBuilder = "";
            GenerateSchema(json.JsonObjectBody);
            return _schemaBuilder;
        }


        private void GenerateSchema(string json)
        {
            int temp = 0;
            string subs = "";
            _schemaBuilder += "{\n\t";
            index = json.IndexOf('\'', index);
            temp = json.IndexOf('\'', index+1);
            subs = json.Substring(index, temp - 1);
            _schemaBuilder += "'" + subs + "': {\n'type': 'string',\n'required': true}";
            if (json.IndexOf('\'', temp) > json.IndexOf('{', temp) && json.IndexOf('{', temp) > 0)
            {
                GenerateSchema(json);
            }
            _schemaBuilder += "}";
        }

        private void GenerateUpToComma(string json)
        {
            
        }
    }
}