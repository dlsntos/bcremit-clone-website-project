using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class ImproveBeneficiaryAddressModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "55f82e0d-da1f-4909-9d7b-7ce0683c2d2f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "befcd0ec-b3f7-4e79-8210-ce2963cd3fa5");

            migrationBuilder.RenameColumn(
                name: "AddressLinetwo",
                table: "BeneficiaryAddresses",
                newName: "AddressLineTwo");

            migrationBuilder.AlterColumn<string>(
                name: "ZipCode",
                table: "BeneficiaryAddresses",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6698cbb4-4784-4c19-b3af-2e3713ca081f", null, "Admin", "ADMIN" },
                    { "c2163510-af6b-4a20-ad64-0973c34adce1", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6698cbb4-4784-4c19-b3af-2e3713ca081f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c2163510-af6b-4a20-ad64-0973c34adce1");

            migrationBuilder.RenameColumn(
                name: "AddressLineTwo",
                table: "BeneficiaryAddresses",
                newName: "AddressLinetwo");

            migrationBuilder.AlterColumn<string>(
                name: "ZipCode",
                table: "BeneficiaryAddresses",
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
                    { "55f82e0d-da1f-4909-9d7b-7ce0683c2d2f", null, "User", "USER" },
                    { "befcd0ec-b3f7-4e79-8210-ce2963cd3fa5", null, "Admin", "ADMIN" }
                });
        }
    }
}
