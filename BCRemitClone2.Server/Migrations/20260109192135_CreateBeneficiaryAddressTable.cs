using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class CreateBeneficiaryAddressTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "31dfffcc-5fbe-4e5e-a619-2b3811d43386");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e8794705-57ea-4c12-b31b-ad067a6139f1");

            migrationBuilder.CreateTable(
                name: "BeneficiaryAddress",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Country = table.Column<string>(type: "text", nullable: false),
                    AddressLineOne = table.Column<string>(type: "text", nullable: false),
                    AddressLinetwo = table.Column<string>(type: "text", nullable: true),
                    CityOrTown = table.Column<string>(type: "text", nullable: false),
                    ZipCode = table.Column<string>(type: "text", nullable: false),
                    DeliveryOption = table.Column<string>(type: "text", nullable: false),
                    BeneficiaryId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BeneficiaryAddress", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BeneficiaryAddress_Beneficiaries_BeneficiaryId",
                        column: x => x.BeneficiaryId,
                        principalTable: "Beneficiaries",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0a6906f1-08b8-4117-8655-8e516a6b8d0d", null, "User", "USER" },
                    { "3c5ca021-2261-4af7-bdd9-b366094f278e", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BeneficiaryAddress_BeneficiaryId",
                table: "BeneficiaryAddress",
                column: "BeneficiaryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BeneficiaryAddress");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0a6906f1-08b8-4117-8655-8e516a6b8d0d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3c5ca021-2261-4af7-bdd9-b366094f278e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "31dfffcc-5fbe-4e5e-a619-2b3811d43386", null, "Admin", "ADMIN" },
                    { "e8794705-57ea-4c12-b31b-ad067a6139f1", null, "User", "USER" }
                });
        }
    }
}
