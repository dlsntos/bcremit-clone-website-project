using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Enums;

namespace BCRemitClone2.Server.Dtos.Payment
{
    public class TransactionDto
    {
        public Guid Id { get; set; }
        public string UserId { get; set; } = default!;
        public int BeneficiaryId { get; set; }
        public string BeneficiaryName { get; set; } = default!;
        public decimal SendAmount { get; set; }
        public decimal TransferFee { get; set; }
        public decimal TotalAmount { get; set; }
        public string PurposeOfRemittance { get; set; } = string.Empty;
        public string? PaymentMethod { get; set; } = default!;
        public TransactionStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? CompletedAt { get; set; }
    }
}
