using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;
using SpartanManageFootball.Interfaces;

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
            private readonly IPhotoAccessor _photoAccessor;

            public CommandHandler(SMFContext context, IPhotoAccessor photoAccessor)
            {
                _context = context;
                _photoAccessor = photoAccessor;
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
