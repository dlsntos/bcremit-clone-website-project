namespace BCRemitClone2.Server.Dtos.Payment
{
    public class ConfirmPageDto
    {
        public BankDto SenderBank { get; set; } = default!;
        public BankDto BeneficiaryBank { get; set; } = default!;
        public decimal Amount { get; set; }
        public decimal Fee { get; set; }
        public decimal Total { get; set; }
    }
}
