using Hogwarts.Api.Models;
using Newtonsoft.Json.Schema;

namespace Hogwarts.Api.Command
{
    public class ConvertFromObjectToSchema
    {
        public string GetJsonSchema(JsonObject json)
        {
            var result = JsonSchema.Parse(json.JsonObjectBody);
            return result.ToString();
        }
    }
}