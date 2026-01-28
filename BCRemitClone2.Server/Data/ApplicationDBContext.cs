using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

using System.Reflection.Metadata;
using System.Xml.Linq;
namespace BCRemitClone2.Server.Data
{
    public class ApplicationDBContext : IdentityDbContext<User>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) 
        :base(dbContextOptions)
        { 
        
        }
        private new DbSet<User> Users = null!;
        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<UserAddress> UserAddress { get; set; }
        public DbSet<Beneficiary> Beneficiaries { get; set; }
        public DbSet<BeneficiaryAddress> BeneficiaryAddresses { get; set; }
        public DbSet<BeneficiaryBank> BeneficiaryBankDetails { get; set; }
        public DbSet<BeneficiaryMobileWallet> BeneficiaryMobileWalletDetails { get; set; }
        public DbSet<UserBankAccount> UserBankAccountDetails { get; set; }
        public DbSet<BeneficiaryBankAccount> BeneficiaryBankAccounts { get; set; }
        public DbSet<TermsAcceptance> termsAcceptances { get; set; }
        public DbSet<TransactionHistory> transactionHistories { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name="Admin",
                    NormalizedName="ADMIN"
                },
                new IdentityRole
                {
                    Name="User",
                    NormalizedName="USER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
