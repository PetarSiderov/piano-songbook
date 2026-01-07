using Balkanory.API.Models;
using Balkanory.API.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Balkanory.API.Services
{
    public class SongService : ISongService
    {
        private readonly ISongRepository _repo;

        public SongService(ISongRepository repo)
        {
            _repo = repo;
        }

        public Task<Song> CreateAsync(Song song) => _repo.CreateAsync(song);

        public Task DeleteAsync(int id) => _repo.DeleteAsync(id);

        public Task<IEnumerable<Song>> GetAllAsync() => _repo.GetAllAsync();

        public Task<Song?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);

        public Task UpdateAsync(Song song) => _repo.UpdateAsync(song);
    }
}
