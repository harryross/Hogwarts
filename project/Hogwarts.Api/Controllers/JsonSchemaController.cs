using System.Web.Http;

namespace Hogwarts.Api.Controllers
{
    public class JsonSchemaController : ApiController
    {
        [HttpPost]
        [Route("jsonSchema")]
        public IHttpActionResult CreateSchema([FromBody]string json)
        {
            return Ok();
        }
    }
}