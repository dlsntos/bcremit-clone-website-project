using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BCRemitClone2.Server.Migrations
{
    /// <inheritdoc />
    public partial class CustomId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7d78214d-cf5d-4eb1-aae0-103da095f87f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca429b8a-da72-4d09-aac9-3bac1e239384");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "31dfffcc-5fbe-4e5e-a619-2b3811d43386", null, "Admin", "ADMIN" },
                    { "e8794705-57ea-4c12-b31b-ad067a6139f1", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "31dfffcc-5fbe-4e5e-a619-2b3811d43386");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e8794705-57ea-4c12-b31b-ad067a6139f1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7d78214d-cf5d-4eb1-aae0-103da095f87f", null, "Admin", "ADMIN" },
                    { "ca429b8a-da72-4d09-aac9-3bac1e239384", null, "User", "USER" }
                });
        }
    }
}
