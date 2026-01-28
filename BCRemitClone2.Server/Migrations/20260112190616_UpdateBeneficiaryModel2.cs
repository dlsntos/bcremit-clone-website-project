using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBeneficiaryModel2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "55f82e0d-da1f-4909-9d7b-7ce0683c2d2f", null, "User", "USER" },
                    { "befcd0ec-b3f7-4e79-8210-ce2963cd3fa5", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "55f82e0d-da1f-4909-9d7b-7ce0683c2d2f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "befcd0ec-b3f7-4e79-8210-ce2963cd3fa5");

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
    }
}
