using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class BeneficiaryAddressController : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BeneficiaryAddress_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddress");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BeneficiaryAddress",
                table: "BeneficiaryAddress");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a6906f1-08b8-4117-8655-8e516a6b8d0d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3c5ca021-2261-4af7-bdd9-b366094f278e");

            migrationBuilder.RenameTable(
                name: "BeneficiaryAddress",
                newName: "BeneficiaryAddresses");

            migrationBuilder.RenameIndex(
                name: "IX_BeneficiaryAddress_BeneficiaryId",
                table: "BeneficiaryAddresses",
                newName: "IX_BeneficiaryAddresses_BeneficiaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BeneficiaryAddresses",
                table: "BeneficiaryAddresses",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3704d42b-a5ab-4356-997e-780384fefcb4", null, "Admin", "ADMIN" },
                    { "cac8857b-eb8f-4b24-84cc-1608d9db295a", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BeneficiaryAddresses_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddresses",
                column: "BeneficiaryId",
                principalTable: "Beneficiaries",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BeneficiaryAddresses_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddresses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BeneficiaryAddresses",
                table: "BeneficiaryAddresses");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3704d42b-a5ab-4356-997e-780384fefcb4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cac8857b-eb8f-4b24-84cc-1608d9db295a");

            migrationBuilder.RenameTable(
                name: "BeneficiaryAddresses",
                newName: "BeneficiaryAddress");

            migrationBuilder.RenameIndex(
                name: "IX_BeneficiaryAddresses_BeneficiaryId",
                table: "BeneficiaryAddress",
                newName: "IX_BeneficiaryAddress_BeneficiaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BeneficiaryAddress",
                table: "BeneficiaryAddress",
                column: "Id");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0a6906f1-08b8-4117-8655-8e516a6b8d0d", null, "User", "USER" },
                    { "3c5ca021-2261-4af7-bdd9-b366094f278e", null, "Admin", "ADMIN" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BeneficiaryAddress_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddress",
                column: "BeneficiaryId",
                principalTable: "Beneficiaries",
                principalColumn: "Id");
        }
    }
}
