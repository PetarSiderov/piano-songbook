using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Balkanory.API.Models;

namespace Balkanory.API.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Add DbSets here as needed, e.g.
        public DbSet<Song> Songs { get; set; }
    }
}
