using MediatR;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Players
{
    public class ListPlayers
    {
        public class Query : IRequest<List<Player>>
        {

        }
        public class Handler : IRequestHandler<Query, List<Player>>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<List<Player>> Handle(Query request, CancellationToken cancellationToken)
            {
                var players = await _context.Players.ToListAsync();

                return players;
            }
        }
    }
}
