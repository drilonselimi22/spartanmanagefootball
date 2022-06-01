using MediatR;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class DeleteStadiums { 
        public class Command : IRequest
    {
        public int Id { get; set; }
    }
    public class Handler : IRequestHandler<Command>
    {
        private readonly SMFContext _context;

        public Handler(SMFContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var stadium = await _context.Stadiums.FindAsync(request.Id);

            if (stadium == null)
            {
                throw new Exception("Could not find player with this idddddddddddddddd");
            }

            _context.Remove(stadium);
            var success = await _context.SaveChangesAsync() > 0;
            if (success)
            {
                return Unit.Value;
            }
            throw new Exception("Problem saving changes");
        }
    }
    }
}
