using System.Web.Http;
using Hogwarts.Api.Command;

namespace Hogwarts.Api.Controllers
{
    public class JsonSchemaController : ApiController
    {
        [HttpPost]
        [Route("jsonSchema")]
        public IHttpActionResult CreateSchema([FromBody]string json)
        {
            var converter = new ConvertFromObjectToSchema();
            var result = converter.GetJsonSchema(json);
            return Ok(result);
        }
    }
}