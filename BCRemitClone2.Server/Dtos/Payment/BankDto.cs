namespace BCRemitClone2.Server.Dtos.Payment
{
    public class BankDto
    {
        public string BankName { get; set; } = default!;
        public string AccountName { get; set; } = default!;
        public string SortCode { get; set; } = default!;
        public string AccountNumber { get; set; } = default!;
        public string Reference { get; set; } = default!;
    }
}
