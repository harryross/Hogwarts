using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace Hogwarts.Api.Controllers
{
    public class JsonSchemaController : ApiController
    {
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("jsonSchema")]
        [EnableCors(origins: "http://hogwarts.static, http://localhost:9000", headers: "*", methods: "*")]
        public IHttpActionResult CreateSchema([FromBody]string json)
        {
            return Ok();
        }
    }
}