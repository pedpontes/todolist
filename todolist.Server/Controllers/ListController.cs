using Microsoft.AspNetCore.Mvc;
using todolist.Server.Data;

namespace todolist.Server.Controllers
{
    [ApiController]
    public class ListController : ControllerBase
    {
        private readonly ToDoListDbContext _context;

        public ListController(ToDoListDbContext context) {
            _context = context;
        }

        [Route("api/todolist")]
        [HttpGet]
        public IActionResult GetToDoList()
        {
            return Ok();
        }
    }
}
