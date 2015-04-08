
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using Hogwarts.Api;
using Microsoft.Owin;
using Newtonsoft.Json.Converters;
using Owin;

[assembly: OwinStartup(typeof(StartUp))]
namespace Hogwarts.Api
{
    public class StartUp
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            JsonMediaTypeFormatter jsonFormatter =
                config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            config.Formatters.Add(jsonFormatter);
            config.MapHttpAttributeRoutes();
            
        }
    }
}