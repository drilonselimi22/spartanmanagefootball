using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Teams
{
    public class CreateTeams
    {
        public class TeamCommand : IRequest<Squad>
        {
            public int StadiumId { get; set; } 
            public string Name { get; set; } 
            public string City { get; set; }
            public bool isVerified { get; set; }

            public class CommandHandler : IRequestHandler<TeamCommand, Squad>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Squad> Handle(TeamCommand request, CancellationToken cancellationToken)
                {
                    var squad = new Squad
                    {
                        StadiumId = request.StadiumId,
                        Name = request.Name,
                        City = request.City,

                    };
                    _context.Squads.AddAsync(squad);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return squad;
                    }
                    throw new Exception("Problem saving changes");
                }
            }
        }
    }
}
