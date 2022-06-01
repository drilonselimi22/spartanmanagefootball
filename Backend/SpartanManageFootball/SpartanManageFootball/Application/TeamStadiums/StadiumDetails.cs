using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.TeamStadiums
{
    public class StadiumDetails
    {
        public class Query : IRequest<Stadium>
        {
            public int Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Stadium>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Stadium> Handle(Query request, CancellationToken cancellationToken)
            {
                var stadium = await _context.Stadiums.FindAsync(request.Id);
                return stadium;
            }
        }
    }
}
