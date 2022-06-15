using MediatR;
using SpartanManageFootball.Application.Core;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class CreateStadiums
    {
        public class StadiumCommand : IRequest<Result<Stadium>>
        {
            public string Name { get; set; }
            public string Location { get; set; }
            public int Capacity { get; set; }
            public class CommandHandler : IRequestHandler<StadiumCommand, Result<Stadium>>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Result<Stadium>> Handle(StadiumCommand request, CancellationToken cancellationToken)
                {
                    var stadium = new Stadium

                    {
                        Name = request.Name,
                        Location = request.Location,
                        Capacity = request.Capacity
                    };

                    await _context.Stadiums.AddAsync(stadium);

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return Result<Stadium>.Success(stadium);
                    }

                    return Result<Stadium>.Failure("There was a problem saving changes");
                }
            }
        }
    }
}
