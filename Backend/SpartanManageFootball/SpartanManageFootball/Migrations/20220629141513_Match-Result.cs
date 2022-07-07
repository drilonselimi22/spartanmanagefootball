using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class MatchResult : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Squads_SquadTeamId",
                table: "Players");

            migrationBuilder.DropForeignKey(
                name: "FK_Squads_AspNetUsers_RegisterUserId",
                table: "Squads");

            migrationBuilder.DropForeignKey(
                name: "FK_Squads_Stadiums_StadiumId",
                table: "Squads");

            migrationBuilder.DropIndex(
                name: "IX_Squads_RegisterUserId",
                table: "Squads");

            migrationBuilder.DropIndex(
                name: "IX_Squads_StadiumId",
                table: "Squads");

            migrationBuilder.DropIndex(
                name: "IX_Players_SquadTeamId",
                table: "Players");

            migrationBuilder.AlterColumn<string>(
                name: "RegisterUserId",
                table: "Squads",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<bool>(
                name: "IsPlayed",
                table: "Matches",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Result",
                table: "Matches",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "LeagueSquads",
                columns: table => new
                {
                    LeaguesLeagueId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LeagueSquads");

            migrationBuilder.DropColumn(
                name: "IsPlayed",
                table: "Matches");

            migrationBuilder.DropColumn(
                name: "Result",
                table: "Matches");

            migrationBuilder.AlterColumn<string>(
                name: "RegisterUserId",
                table: "Squads",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Squads_RegisterUserId",
                table: "Squads",
                column: "RegisterUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Squads_StadiumId",
                table: "Squads",
                column: "StadiumId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_SquadTeamId",
                table: "Players",
                column: "SquadTeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Squads_SquadTeamId",
                table: "Players",
                column: "SquadTeamId",
                principalTable: "Squads",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Squads_AspNetUsers_RegisterUserId",
                table: "Squads",
                column: "RegisterUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Squads_Stadiums_StadiumId",
                table: "Squads",
                column: "StadiumId",
                principalTable: "Stadiums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
