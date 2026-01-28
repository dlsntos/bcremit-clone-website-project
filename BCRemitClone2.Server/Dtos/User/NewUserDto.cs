namespace BCRemitClone2.Server.Dtos.User
{
    public class NewUserDto
    {
        public string UserId { get; set; }
        public string? Email { get; set; }
        public string? Country { get; set; }
        public string? DialCode { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Token { get; set; }
    }
}
