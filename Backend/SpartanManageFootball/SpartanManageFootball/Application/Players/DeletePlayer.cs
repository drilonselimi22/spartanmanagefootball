using MediatR;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Players
{
    public class DeletePlayer
    {
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
                var player = await _context.Players.FindAsync(request.Id);

                if(player == null)
                {
                    throw new Exception("Could not find player with this id");
                }

                _context.Remove(player);
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
