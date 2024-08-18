using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todolist.Server.Data;
using todolist.Server.Models;

namespace todolist.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ListController : ControllerBase
    {
        private readonly ToDoListDbContext _context;

        public ListController(ToDoListDbContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get() {
        
            var result = _context.ItemList;
            return new JsonResult(result);
        }

        [HttpPost]
        public IActionResult Post([FromBody] ItemList Item)
        {
            if (string.IsNullOrEmpty(Item.Title) || string.IsNullOrEmpty(Item.Description)) return StatusCode(400);
            try {

                _context.ItemList.Add(Item);
                _context.SaveChanges();

                return StatusCode(200);
            }
            catch (DbUpdateException) { 
                throw;
            }
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult Delete(int id) {

            var result = _context.ItemList.Where(x => x.Id == id).ExecuteDelete();
            if (result == 0) return StatusCode(404);
            return StatusCode(200);
        }
    }
}
