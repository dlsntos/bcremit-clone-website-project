namespace BCRemitClone2.Server.Dtos.UserInfo
{
    public class CreateUserInformationDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public DateTime? BirthDate { get; set; }
        public string SourceOfFunds { get; set; } = string.Empty;


    }
}
