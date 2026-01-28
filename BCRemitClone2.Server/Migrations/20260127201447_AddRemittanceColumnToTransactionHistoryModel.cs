using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddRemittanceColumnToTransactionHistoryModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4d1e0710-ca32-4203-88cb-12480e35a692");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74a2802e-70a9-4b9a-974d-9b557618cc42");

            migrationBuilder.RenameColumn(
                name: "TransactionId",
                table: "transactionHistories",
                newName: "PurposeOfRemittance");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "e3eb10c5-123d-4396-a5d4-a53d36fc6244", null, "Admin", "ADMIN" },
                    { "e714dc38-665a-4184-8be9-1f2d2c02f27e", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e3eb10c5-123d-4396-a5d4-a53d36fc6244");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e714dc38-665a-4184-8be9-1f2d2c02f27e");

            migrationBuilder.RenameColumn(
                name: "PurposeOfRemittance",
                table: "transactionHistories",
                newName: "TransactionId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4d1e0710-ca32-4203-88cb-12480e35a692", null, "User", "USER" },
                    { "74a2802e-70a9-4b9a-974d-9b557618cc42", null, "Admin", "ADMIN" }
                });
        }
    }
}
