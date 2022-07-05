using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class StandingsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "RegisterUserId",
                table: "Squads",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.CreateTable(
                name: "Standings",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SquadTeamId = table.Column<int>(type: "int", nullable: false),
                    LeagueId = table.Column<int>(type: "int", nullable: false),
                    Points = table.Column<int>(type: "int", nullable: false),
                    Wins = table.Column<int>(type: "int", nullable: false),
                    Losses = table.Column<int>(type: "int", nullable: false),
                    Draws = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Standings", x => x.id);
                    table.ForeignKey(
                        name: "FK_Standings_Leagues_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "Leagues",
                        principalColumn: "LeagueId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Standings_Squads_SquadTeamId",
                        column: x => x.SquadTeamId,
                        principalTable: "Squads",
                        principalColumn: "TeamId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Standings_LeagueId",
                table: "Standings",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_Standings_SquadTeamId",
                table: "Standings",
                column: "SquadTeamId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Standings");

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
