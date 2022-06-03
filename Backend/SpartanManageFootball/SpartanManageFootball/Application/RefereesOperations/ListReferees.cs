using MediatR;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.RefereesOperations
{
    public class ListReferees
    {
        public class Query : IRequest<List<Referee>>
        {
        }
        public class Handler : IRequestHandler<Query, List<Referee>>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<List<Referee>> Handle(Query request, CancellationToken cancellationToken)
            {
                var referees = await _context.Referees.ToListAsync();

                return referees;
            }
        }
    }
}
