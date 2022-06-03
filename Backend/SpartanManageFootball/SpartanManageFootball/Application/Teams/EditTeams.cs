using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Teams
{
    public class EditTeams
    {
        public class TeamEditCommand : IRequest<Squad>
        {
            public int TeamId { get; set; }
            public int? StadiumId { get; set; }
            public string Name { get; set; }
            public string City { get; set; }
            public bool? isVerified { get; set; }
        }
        public class CommandHandler : IRequestHandler<TeamEditCommand, Squad>
        {
            private readonly SMFContext _context;

            public CommandHandler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Squad> Handle(TeamEditCommand request, CancellationToken cancellationToken)
            {
                var team = await _context.Squads.FindAsync(request.TeamId);
                if (team == null)
                {
                    throw new Exception("could not find player");
                }
                team.StadiumId = request.StadiumId ?? team.StadiumId;
                team.Name = request.Name ?? team.Name;
                team.City = request.City ?? team.City;

                team.isVerified = request.isVerified ?? team.isVerified;


                var success = await _context.SaveChangesAsync() > 0;
                if (success)
                {
                    return team;
                }

                return null;
            }
        }
    }
}
