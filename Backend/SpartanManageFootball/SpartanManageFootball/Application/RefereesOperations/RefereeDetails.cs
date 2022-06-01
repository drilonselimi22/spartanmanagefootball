using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.RefereesOperations
{
    public class RefereeDetails
    {
        public class Query : IRequest<Referee>
        {
            public int Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Referee>
        {
            private readonly SMFContext _context;

            public Handler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Referee> Handle(Query request, CancellationToken cancellationToken)
            {
                var referee = await _context.Referees.FindAsync(request.Id);
                return referee;
            }
        }
    }
}
