using Newtonsoft.Json.Schema;

namespace Hogwarts.Api.Command
{
    public class ConvertFromObjectToSchema
    {
        public string GetJsonSchema(string json)
        {
            var result = JsonSchema.Parse(json);
            return result.ToString();
        }
    }
}