using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class InitialPhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_Squads_SquadTeamId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_SquadTeamId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "SquadTeamId",
                table: "Photos");

            migrationBuilder.AddColumn<string>(
                name: "RegisterUserId",
                table: "Photos",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_RegisterUserId",
                table: "Photos",
                column: "RegisterUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_AspNetUsers_RegisterUserId",
                table: "Photos",
                column: "RegisterUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photos_AspNetUsers_RegisterUserId",
                table: "Photos");

            migrationBuilder.DropIndex(
                name: "IX_Photos_RegisterUserId",
                table: "Photos");

            migrationBuilder.DropColumn(
                name: "RegisterUserId",
                table: "Photos");

            migrationBuilder.AddColumn<int>(
                name: "SquadTeamId",
                table: "Photos",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photos_SquadTeamId",
                table: "Photos",
                column: "SquadTeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photos_Squads_SquadTeamId",
                table: "Photos",
                column: "SquadTeamId",
                principalTable: "Squads",
                principalColumn: "TeamId");
        }
    }
}
