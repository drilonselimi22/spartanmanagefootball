using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpartanManageFootball.Migrations
{
    public partial class Matchesadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          
            migrationBuilder.AddColumn<int>(
                name: "MatchWeek",
                table: "Matches",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.CreateIndex(
                name: "IX_MatchReferee_IDOfMatchMatchId",
                table: "MatchReferee",
                column: "IDOfMatchMatchId");

            migrationBuilder.CreateIndex(
                name: "IX_MatchReferee_RefOfMatchId",
                table: "MatchReferee",
                column: "RefOfMatchId");

            migrationBuilder.AddForeignKey(
                name: "FK_MatchReferee_Matches_IDOfMatchMatchId",
                table: "MatchReferee",
                column: "IDOfMatchMatchId",
                principalTable: "Matches",
                principalColumn: "MatchId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MatchReferee_Referees_RefOfMatchId",
                table: "MatchReferee",
                column: "RefOfMatchId",
                principalTable: "Referees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
