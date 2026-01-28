using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BCRemitClone2.Server.Enums;

namespace BCRemitClone2.Server.Models
{
    public class TransactionHistory
    {
        public Guid Id { get; set; }
        public string UserId { get; set; } = default!;
        public User User { get; set; } = default!;
        public int BeneficiaryId { get; set; }
        public Beneficiary Beneficiary { get; set; } = default!;
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
