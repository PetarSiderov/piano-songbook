using Balkanory.API.Data;
using Balkanory.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Balkanory.API.Repositories
{
    public class SongRepository : ISongRepository
    {
        private readonly ApplicationDbContext _db;

        public SongRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Song> CreateAsync(Song song)
        {
            _db.Songs.Add(song);
            await _db.SaveChangesAsync();
            return song;
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await _db.Songs.FindAsync(id);
            if (entity == null) return;
            _db.Songs.Remove(entity);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Song>> GetAllAsync()
        {
            return await _db.Songs.AsNoTracking().ToListAsync();
        }

        public async Task<Song?> GetByIdAsync(int id)
        {
            return await _db.Songs.FindAsync(id);
        }

        public async Task UpdateAsync(Song song)
        {
            _db.Songs.Update(song);
            await _db.SaveChangesAsync();
        }
    }
}
