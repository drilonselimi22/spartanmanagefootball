using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class InitSmfCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "photoNum",
                table: "Squads",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "photoUrl",
                table: "Squads",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "photoNum",
                table: "Squads");

            migrationBuilder.DropColumn(
                name: "photoUrl",
                table: "Squads");
        }
    }
}
