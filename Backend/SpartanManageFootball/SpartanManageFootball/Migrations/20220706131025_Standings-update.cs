using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class Standingsupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<int>(
                name: "GoalsConceded",
                table: "Standings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GoalsDifference",
                table: "Standings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GoalsScored",
                table: "Standings",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Standings_LeagueId",
                table: "Standings",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_Standings_SquadTeamId",
                table: "Standings",
                column: "SquadTeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Standings_Leagues_LeagueId",
                table: "Standings",
                column: "LeagueId",
                principalTable: "Leagues",
                principalColumn: "LeagueId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Standings_Squads_SquadTeamId",
                table: "Standings",
                column: "SquadTeamId",
                principalTable: "Squads",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
