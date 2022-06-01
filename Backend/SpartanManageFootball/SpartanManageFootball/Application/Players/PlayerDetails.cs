using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Players
{
    public class PlayerDetails
    {
        public class Query : IRequest<Player>
        {
            public int Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Player>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Player> Handle(Query request, CancellationToken cancellationToken)
            {
                var player = await _context.Players.FindAsync(request.Id);
                return player;
            }
        }
    }
}
