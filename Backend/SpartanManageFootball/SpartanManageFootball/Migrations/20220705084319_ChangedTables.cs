using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class ChangedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StandingsTables_Leagues_LeagueId",
                table: "StandingsTables");

            migrationBuilder.DropForeignKey(
                name: "FK_StandingsTables_Squads_SquadTeamId",
                table: "StandingsTables");

            migrationBuilder.DropIndex(
                name: "IX_StandingsTables_LeagueId",
                table: "StandingsTables");

            migrationBuilder.DropIndex(
                name: "IX_StandingsTables_SquadTeamId",
                table: "StandingsTables");

            migrationBuilder.RenameColumn(
                name: "Wins",
                table: "StandingsTables",
                newName: "SquadWins");

            migrationBuilder.RenameColumn(
                name: "SquadTeamId",
                table: "StandingsTables",
                newName: "SquadPoints");

            migrationBuilder.RenameColumn(
                name: "Points",
                table: "StandingsTables",
                newName: "SquadLosses");

            migrationBuilder.RenameColumn(
                name: "Losses",
                table: "StandingsTables",
                newName: "SquadIdTeamId");

            migrationBuilder.RenameColumn(
                name: "LeagueId",
                table: "StandingsTables",
                newName: "SquadDraws");

            migrationBuilder.RenameColumn(
                name: "Draws",
                table: "StandingsTables",
                newName: "LeagueId1");

            migrationBuilder.RenameColumn(
                name: "StandingId",
                table: "StandingsTables",
                newName: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_StandingsTables_LeagueId1",
                table: "StandingsTables",
                column: "LeagueId1");

            migrationBuilder.CreateIndex(
                name: "IX_StandingsTables_SquadIdTeamId",
                table: "StandingsTables",
                column: "SquadIdTeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_StandingsTables_Leagues_LeagueId1",
                table: "StandingsTables",
                column: "LeagueId1",
                principalTable: "Leagues",
                principalColumn: "LeagueId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_StandingsTables_Squads_SquadIdTeamId",
                table: "StandingsTables",
                column: "SquadIdTeamId",
                principalTable: "Squads",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StandingsTables_Leagues_LeagueId1",
                table: "StandingsTables");

            migrationBuilder.DropForeignKey(
                name: "FK_StandingsTables_Squads_SquadIdTeamId",
                table: "StandingsTables");

            migrationBuilder.DropIndex(
                name: "IX_StandingsTables_LeagueId1",
                table: "StandingsTables");

            migrationBuilder.DropIndex(
                name: "IX_StandingsTables_SquadIdTeamId",
                table: "StandingsTables");

            migrationBuilder.RenameColumn(
                name: "SquadWins",
                table: "StandingsTables",
                newName: "Wins");

            migrationBuilder.RenameColumn(
                name: "SquadPoints",
                table: "StandingsTables",
                newName: "SquadTeamId");

            migrationBuilder.RenameColumn(
                name: "SquadLosses",
                table: "StandingsTables",
                newName: "Points");

            migrationBuilder.RenameColumn(
                name: "SquadIdTeamId",
                table: "StandingsTables",
                newName: "Losses");

            migrationBuilder.RenameColumn(
                name: "SquadDraws",
                table: "StandingsTables",
                newName: "LeagueId");

            migrationBuilder.RenameColumn(
                name: "LeagueId1",
                table: "StandingsTables",
                newName: "Draws");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "StandingsTables",
                newName: "StandingId");

            migrationBuilder.CreateIndex(
                name: "IX_StandingsTables_LeagueId",
                table: "StandingsTables",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_StandingsTables_SquadTeamId",
                table: "StandingsTables",
                column: "SquadTeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_StandingsTables_Leagues_LeagueId",
                table: "StandingsTables",
                column: "LeagueId",
                principalTable: "Leagues",
                principalColumn: "LeagueId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_StandingsTables_Squads_SquadTeamId",
                table: "StandingsTables",
                column: "SquadTeamId",
                principalTable: "Squads",
                principalColumn: "TeamId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
