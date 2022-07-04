using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class ChangedMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MatchReferee",
                columns: table => new
                {
                    IDOfMatchMatchId = table.Column<int>(type: "int", nullable: false),
                    RefOfMatchId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_MatchReferee_Matches_IDOfMatchMatchId",
                        column: x => x.IDOfMatchMatchId,
                        principalTable: "Matches",
                        principalColumn: "MatchId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MatchReferee_Referees_RefOfMatchId",
                        column: x => x.RefOfMatchId,
                        principalTable: "Referees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MatchReferee_IDOfMatchMatchId",
                table: "MatchReferee",
                column: "IDOfMatchMatchId");

            migrationBuilder.CreateIndex(
                name: "IX_MatchReferee_RefOfMatchId",
                table: "MatchReferee",
                column: "RefOfMatchId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MatchReferee");
        }
    }
}
