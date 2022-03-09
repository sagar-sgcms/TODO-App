using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;
using backend.Services.TODOService;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TODOController : ControllerBase
    {
        private readonly ITODOService _tODOService;
        public TODOController(ITODOService tODOService)
        {
            this._tODOService = tODOService;
        }
        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<TODOModel>>>> Get()
        {
            return Ok(await _tODOService.GetAllTask());
        }

         [HttpPost]
        public async Task<ActionResult<ServiceResponse<TODOModel>>> Add(TODOModel newTask){
            return Ok(await _tODOService.AddTask(newTask));
        }
        [HttpPut]
        public async Task<IActionResult> Update(TODOModel Task){
            var data = await _tODOService.UpdateTask(Task);
            return Ok(data);
        }

    }
}