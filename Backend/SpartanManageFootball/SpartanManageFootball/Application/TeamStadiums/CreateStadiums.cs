using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class CreateStadiums
    {
        public class StadiumCommand : IRequest<Stadium>
        {
            public string Name { get; set; } 
            public string Location { get; set; } 
            public int Capacity { get; set; }
            public class CommandHandler : IRequestHandler<StadiumCommand, Stadium>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Stadium> Handle(StadiumCommand request, CancellationToken cancellationToken)
                {
                    var stadium = new Stadium
                    {
                        Name = request.Name,
                        Location = request.Location,
                        Capacity = request.Capacity,

                    };
                    _context.Stadiums.AddAsync(stadium);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return stadium;
                    }
                    throw new Exception("Problem saving changes");
                }
            }
        }
    }
}
