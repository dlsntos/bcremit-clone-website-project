using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class CustomTransactionId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0c331abd-4fff-4eda-b860-ed124654c971");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "387234ed-9ccf-4647-b7c7-6651729167a6");

            migrationBuilder.AddColumn<string>(
                name: "TransactionId",
                table: "transactionHistories",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1c9b94be-6b20-4a90-b29b-a50d54c658c7", null, "User", "USER" },
                    { "6ea4822d-37b8-4566-8441-9f13af65f788", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1c9b94be-6b20-4a90-b29b-a50d54c658c7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6ea4822d-37b8-4566-8441-9f13af65f788");

            migrationBuilder.DropColumn(
                name: "TransactionId",
                table: "transactionHistories");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0c331abd-4fff-4eda-b860-ed124654c971", null, "Admin", "ADMIN" },
                    { "387234ed-9ccf-4647-b7c7-6651729167a6", null, "User", "USER" }
                });
        }
    }
}
