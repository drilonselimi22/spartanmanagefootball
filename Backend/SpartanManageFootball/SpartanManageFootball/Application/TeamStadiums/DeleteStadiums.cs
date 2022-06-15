using MediatR;
using SpartanManageFootball.Application.Core;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class DeleteStadiums
    {
        public class Command : IRequest<Result<Unit>>
        {
            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Command,Result<Unit>>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var stadium = await _context.Stadiums.FindAsync(request.Id);

                if (stadium == null)
                {
                    return Result<Unit>.Failure("Could not find stadium with this id");
                }

                _context.Remove(stadium);
                
                var success = await _context.SaveChangesAsync() > 0;
                
                if (success)
                {
                    return Result<Unit>.Success(Unit.Value);
                }

                return Result<Unit>.Failure("There was a problem saving changes");
            }
        }
    }
}
