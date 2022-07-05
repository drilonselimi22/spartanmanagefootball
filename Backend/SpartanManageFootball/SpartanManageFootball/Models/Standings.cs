namespace SpartanManageFootball.Models
{
    public class Standings
    {
        public int id {get; set;}
        public int SquadTeamId {get; set;}
        public int Leagueid {get; set;}
        public int Points { get; set;} 
        public int Wins {get; set;}
        public int Losses { get; set; }
        public int Draws { get; set; }

    }
}
