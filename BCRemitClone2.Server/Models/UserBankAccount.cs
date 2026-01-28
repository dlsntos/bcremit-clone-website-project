namespace BCRemitClone2.Server.Models
{
    public class UserBankAccount
    {
        public int Id { get; set; }
        public string UserId { get; set; } = string.Empty;  
        public User? User { get; set; }
        public string BankName { get; set; } = default!;
        public string AccountName { get; set; } = string.Empty;
        public string AccountNumber { get; set; } = string.Empty;
        public string SortCode { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public bool IsDefault { get; set; }
    }
}
