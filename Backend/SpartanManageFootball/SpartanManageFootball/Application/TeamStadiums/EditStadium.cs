using MediatR;
using SpartanManageFootball.Application.Core;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class EditStadium
    {
        public class StadiumEditCommand : IRequest<Result<Stadium>>
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Location { get; set; }
            public int? Capacity { get; set; }
        }
        public class CommandHandler : IRequestHandler<StadiumEditCommand, Result<Stadium>>
        {
            private readonly SMFContext _context;

            public CommandHandler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Result<Stadium>> Handle(StadiumEditCommand request, CancellationToken cancellationToken)
            {
                var stadium = await _context.Stadiums.FindAsync(request.Id);

                if (stadium == null)
                {
                    return Result<Stadium>.Failure("Could not find this stadium");
                }

                stadium.Name = request.Name ?? stadium.Name;
                stadium.Location = request.Location ?? stadium.Location;
                stadium.Capacity = request.Capacity ?? stadium.Capacity;

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return Result<Stadium>.Success(stadium);
                }

                return Result<Stadium>.Failure("Something went wrong");
            }
        }
    }
}
