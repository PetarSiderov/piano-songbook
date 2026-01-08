using System.ComponentModel.DataAnnotations;

namespace Balkanory.API.Models
{
    public class Song
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        [MaxLength(200)]
        public string Artist { get; set; }

        public string? Lyrics { get; set; }

        public string? Chords { get; set; }
    }
}
