using System.Web.Http;

namespace Hogwarts.Controllers
{
    public class JsonSchemaController : ApiController
    {
        [HttpPost]
        [Route("jsonSchema")]
        public IHttpActionResult CreateSchema(string json)
        {
            return Ok();
        }
    }
}