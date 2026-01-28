using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class BeneficiaryDeliveryOption : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a7b18fb-e25f-41a0-832c-c573545e6b00");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4e6b4d9-3405-4831-beea-4c6235cb9418");

            migrationBuilder.AddColumn<string>(
                name: "DeliveryOption",
                table: "Beneficiaries",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "d043a148-43ee-4e71-b7b6-537cc23eaef7", null, "User", "USER" },
                    { "f6e18d1f-d912-492a-8676-e757696c5e27", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d043a148-43ee-4e71-b7b6-537cc23eaef7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f6e18d1f-d912-492a-8676-e757696c5e27");

            migrationBuilder.DropColumn(
                name: "DeliveryOption",
                table: "Beneficiaries");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0a7b18fb-e25f-41a0-832c-c573545e6b00", null, "Admin", "ADMIN" },
                    { "d4e6b4d9-3405-4831-beea-4c6235cb9418", null, "User", "USER" }
                });
        }
    }
}
