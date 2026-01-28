namespace BCRemitClone2.Server.Dtos.UserInfo
{
    public class UserInformationDto
    {

        public int profileID { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateTime? BirthDate { get; set; }
        public string SourceOfFunds { get; set; } = string.Empty;
        public string UserId { get; set; } = default!;
    }
}
