using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Models
{
    public class UserProfile
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int profileID { get; set; }
        [Required]
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
        public DateTime? BirthDate { get; set; }
        [Required]
        public string SourceOfFunds { get; set; } = string.Empty;
        [Required]
        public string UserId { get; set; } = default!;
        public User? User { get; set; }

    }
}
