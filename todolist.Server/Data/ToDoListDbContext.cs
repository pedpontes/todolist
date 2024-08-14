using Microsoft.EntityFrameworkCore;
using todolist.Server.Models;

namespace todolist.Server.Data
{
    public class ToDoListDbContext : DbContext
    {
        public ToDoListDbContext(DbContextOptions<ToDoListDbContext> options) : base(options) { }
        public DbSet<ItemList> ItemList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ItemList>();
        }
    }
}
