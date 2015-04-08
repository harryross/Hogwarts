
using System.Web.Http;
using Hogwarts.Api;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(StartUp))]
namespace Hogwarts.Api
{
    public class StartUp
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            config.MapHttpAttributeRoutes();
            
        }
    }
}