using Microsoft.AspNetCore.Mvc;
using todolist.Server.Data;
using todolist.Server.Models;

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

        [Route("api/appendlist")]
        [HttpPost]
        public IActionResult AppendList([FromBody] ItemList Item)
        {
            if (Item == null || Item.Title == "" || Item.Description == "") return BadRequest();
            Console.WriteLine(Item.Title + Item.Description);
            try {

                var result = _context.ItemList.Add(Item);

                _context.SaveChanges();
                return Ok();
            }
            catch (OperationCanceledException) { 
                throw;
            }
        }
    }
}
