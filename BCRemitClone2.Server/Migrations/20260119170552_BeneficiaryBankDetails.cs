using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class BeneficiaryBankDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6698cbb4-4784-4c19-b3af-2e3713ca081f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c2163510-af6b-4a20-ad64-0973c34adce1");

            migrationBuilder.CreateTable(
                name: "BeneficiaryBankDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BankName = table.Column<string>(type: "text", nullable: false),
                    BankBranch = table.Column<string>(type: "text", nullable: true),
                    BankNumber = table.Column<string>(type: "text", nullable: false),
                    BeneficiaryId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiaryBankDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeneficiaryBankDetails_Beneficiaries_BeneficiaryId",
                        column: x => x.BeneficiaryId,
                        principalTable: "Beneficiaries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "91c8377b-b27f-4f7e-bfac-6e823e3993cc", null, "User", "USER" },
                    { "c813539a-80bf-4178-8487-a4120be2840e", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiaryBankDetails_BeneficiaryId",
                table: "BeneficiaryBankDetails",
                column: "BeneficiaryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeneficiaryBankDetails");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "91c8377b-b27f-4f7e-bfac-6e823e3993cc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c813539a-80bf-4178-8487-a4120be2840e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6698cbb4-4784-4c19-b3af-2e3713ca081f", null, "Admin", "ADMIN" },
                    { "c2163510-af6b-4a20-ad64-0973c34adce1", null, "User", "USER" }
                });
        }
    }
}
