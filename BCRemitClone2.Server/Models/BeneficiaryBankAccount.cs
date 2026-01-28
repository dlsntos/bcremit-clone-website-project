namespace BCRemitClone2.Server.Models
{
    public class BeneficiaryBankAccount
    {
        public int Id { get; set; }
        public int BeneficiaryId { get; set; }
        public Beneficiary? Beneficiary { get; set; }
        public string BankName { get; set; } = default!;
        public string AccountName { get; set; } = string.Empty;
        public string AccountNumber { get; set; } = string.Empty;
        public string SortCode { get; set; } = string.Empty;

        public string Reference { get; set; } = string.Empty;
      
    }
}
