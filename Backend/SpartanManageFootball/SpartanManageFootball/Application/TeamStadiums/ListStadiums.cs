using MediatR;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class ListStadiums
    {
        public class Query : IRequest<List<Stadium>>
        {

        }
        public class Handler : IRequestHandler<Query, List<Stadium>>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<List<Stadium>> Handle(Query request, CancellationToken cancellationToken)
            {
                var stadiums = await _context.Stadiums.ToListAsync();
                return stadiums ;
            }
        }
    }
}
