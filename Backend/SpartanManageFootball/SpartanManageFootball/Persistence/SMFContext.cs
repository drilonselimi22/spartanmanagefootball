using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;

namespace SpartanManageFootball.Persistence
{
    public class SMFContext : DbContext
    {
        public SMFContext(DbContextOptions<SMFContext> options) : base(options)
        {
        }
        public DbSet<League> Leagues { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Referee> Referees{ get; set; }
        public DbSet<SpartanAgent> SpartanAgents { get; set; }
        public DbSet<Squad> Squads { get; set; }
        public DbSet<SquadAdmin> SquadAdmins { get; set; }
        public DbSet<Stadium> Stadiums { get; set; }

    }
}