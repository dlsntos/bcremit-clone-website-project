namespace BCRemitClone2.Server.Models
{
    public class TermsAcceptance
    {
        public int Id { get; set; }
        public Guid TransactionId { get; set; }
        public TransactionHistory? Transaction { get; set; }
        public DateTime AcceptedAt { get; set; }
    }
}
