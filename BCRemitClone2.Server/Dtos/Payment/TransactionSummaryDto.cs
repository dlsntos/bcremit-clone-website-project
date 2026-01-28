using BCRemitClone2.Server.Dtos.Beneficiary;

namespace BCRemitClone2.Server.Dtos.Payment
{
    public class TransactionSummaryDto
    {
        public decimal SendAmount { get; set; }
        public decimal TransferFee { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
