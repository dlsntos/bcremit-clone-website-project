using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class MakePaymentMethodNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c4a8a7b7-82e8-4cf2-bd91-44a9e554d7ad");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d474dc89-3049-4cf9-a239-df746c35ea0a");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentMethod",
                table: "transactionHistories",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0c331abd-4fff-4eda-b860-ed124654c971", null, "Admin", "ADMIN" },
                    { "387234ed-9ccf-4647-b7c7-6651729167a6", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0c331abd-4fff-4eda-b860-ed124654c971");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "387234ed-9ccf-4647-b7c7-6651729167a6");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentMethod",
                table: "transactionHistories",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c4a8a7b7-82e8-4cf2-bd91-44a9e554d7ad", null, "Admin", "ADMIN" },
                    { "d474dc89-3049-4cf9-a239-df746c35ea0a", null, "User", "USER" }
                });
        }
    }
}
