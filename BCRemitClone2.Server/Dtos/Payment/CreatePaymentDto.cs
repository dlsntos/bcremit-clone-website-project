namespace BCRemitClone2.Server.Dtos.Payment
{
    public class CreatePaymentDto
    {
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; } = default!;
    }
}
