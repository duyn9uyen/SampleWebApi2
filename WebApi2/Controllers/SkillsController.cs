using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi2.Controllers
{
    public class SkillsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Updateskill(string skillPk, string userPk)
        {
            return Ok("200");
        }
    }
}
