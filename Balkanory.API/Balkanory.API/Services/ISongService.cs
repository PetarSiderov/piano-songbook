using Balkanory.API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Balkanory.API.Services
{
    public interface ISongService
    {
        Task<IEnumerable<Song>> GetAllAsync();
        Task<Song?> GetByIdAsync(int id);
        Task<Song> CreateAsync(Song song);
        Task UpdateAsync(Song song);
        Task DeleteAsync(int id);
    }
}
