namespace BCRemitClone2.Server.Dtos.Payment
{
    public class TransactionSummaryDto
    {
        public int BeneficiaryId { get; set; }
        public decimal SendAmount { get; set; }
        public decimal TransferFee { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
