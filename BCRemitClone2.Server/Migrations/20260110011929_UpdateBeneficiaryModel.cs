using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBeneficiaryModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BeneficiaryAddresses_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddresses");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3704d42b-a5ab-4356-997e-780384fefcb4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cac8857b-eb8f-4b24-84cc-1608d9db295a");

            migrationBuilder.AlterColumn<int>(
                name: "BeneficiaryId",
                table: "BeneficiaryAddresses",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0a7b18fb-e25f-41a0-832c-c573545e6b00", null, "Admin", "ADMIN" },
                    { "d4e6b4d9-3405-4831-beea-4c6235cb9418", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_BeneficiaryAddresses_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddresses",
                column: "BeneficiaryId",
                principalTable: "Beneficiaries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BeneficiaryAddresses_Beneficiaries_BeneficiaryId",
                table: "BeneficiaryAddresses");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a7b18fb-e25f-41a0-832c-c573545e6b00");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4e6b4d9-3405-4831-beea-4c6235cb9418");

            migrationBuilder.AlterColumn<int>(
                name: "BeneficiaryId",
                table: "BeneficiaryAddresses",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

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
    }
}
