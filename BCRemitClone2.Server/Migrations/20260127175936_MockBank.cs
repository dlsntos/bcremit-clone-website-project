using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class MockBank : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1493c2e8-5c5b-4a8f-a6c0-e09fa87f6233");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8035a553-eb41-4056-b7c4-721281d55635");

            migrationBuilder.CreateTable(
                name: "BeneficiaryBankAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BeneficiaryId = table.Column<int>(type: "integer", nullable: false),
                    BankName = table.Column<string>(type: "text", nullable: false),
                    AccountName = table.Column<string>(type: "text", nullable: false),
                    AccountNumber = table.Column<string>(type: "text", nullable: false),
                    SortCode = table.Column<string>(type: "text", nullable: false),
                    Reference = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiaryBankAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeneficiaryBankAccounts_Beneficiaries_BeneficiaryId",
                        column: x => x.BeneficiaryId,
                        principalTable: "Beneficiaries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "transactionHistories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    BeneficiaryId = table.Column<int>(type: "integer", nullable: false),
                    SendAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    TransferFee = table.Column<decimal>(type: "numeric", nullable: false),
                    TotalAmount = table.Column<decimal>(type: "numeric", nullable: false),
                    PaymentMethod = table.Column<string>(type: "text", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    CompletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_transactionHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_transactionHistories_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_transactionHistories_Beneficiaries_BeneficiaryId",
                        column: x => x.BeneficiaryId,
                        principalTable: "Beneficiaries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserBankAccountDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<string>(type: "text", nullable: false),
                    BankName = table.Column<string>(type: "text", nullable: false),
                    AccountName = table.Column<string>(type: "text", nullable: false),
                    AccountNumber = table.Column<string>(type: "text", nullable: false),
                    SortCode = table.Column<string>(type: "text", nullable: false),
                    Balance = table.Column<decimal>(type: "numeric", nullable: false),
                    IsDefault = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserBankAccountDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserBankAccountDetails_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "termsAcceptances",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TransactionId = table.Column<Guid>(type: "uuid", nullable: false),
                    AcceptedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_termsAcceptances", x => x.Id);
                    table.ForeignKey(
                        name: "FK_termsAcceptances_transactionHistories_TransactionId",
                        column: x => x.TransactionId,
                        principalTable: "transactionHistories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c4a8a7b7-82e8-4cf2-bd91-44a9e554d7ad", null, "Admin", "ADMIN" },
                    { "d474dc89-3049-4cf9-a239-df746c35ea0a", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiaryBankAccounts_BeneficiaryId",
                table: "BeneficiaryBankAccounts",
                column: "BeneficiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_termsAcceptances_TransactionId",
                table: "termsAcceptances",
                column: "TransactionId");

            migrationBuilder.CreateIndex(
                name: "IX_transactionHistories_BeneficiaryId",
                table: "transactionHistories",
                column: "BeneficiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_transactionHistories_UserId",
                table: "transactionHistories",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserBankAccountDetails_UserId",
                table: "UserBankAccountDetails",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeneficiaryBankAccounts");

            migrationBuilder.DropTable(
                name: "termsAcceptances");

            migrationBuilder.DropTable(
                name: "UserBankAccountDetails");

            migrationBuilder.DropTable(
                name: "transactionHistories");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4a8a7b7-82e8-4cf2-bd91-44a9e554d7ad");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d474dc89-3049-4cf9-a239-df746c35ea0a");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1493c2e8-5c5b-4a8f-a6c0-e09fa87f6233", null, "Admin", "ADMIN" },
                    { "8035a553-eb41-4056-b7c4-721281d55635", null, "User", "USER" }
                });
        }
    }
}
