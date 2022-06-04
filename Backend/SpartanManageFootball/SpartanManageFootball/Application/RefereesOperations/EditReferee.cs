using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.RefereesOperations
{
    public class EditReferee
    {
        public class RefereeEditCommand : IRequest<Referee>
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string LastName { get; set; }
            public string Experience { get; set; }
            public string City { get; set; }
            public string Position { get; set; }
        }
        public class CommandHandler : IRequestHandler<RefereeEditCommand, Referee>
        {
            private readonly SMFContext _context;

            public CommandHandler(SMFContext context)
            {
                _context = context;
            }

            public async Task<Referee> Handle(RefereeEditCommand request, CancellationToken cancellationToken)
            {
                var referee = await _context.Referees.FindAsync(request.Id);
                if (referee == null)
                {
                    throw new Exception("could not find player");
                }

                referee.Name = request.Name ?? referee.Name;
                referee.LastName = request.LastName ?? referee.LastName;
                referee.Experience = request.Experience ?? referee.Experience;
                referee.City = request.City ?? referee.City;
                referee.Position = request.Position ?? referee.Position;

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return referee;
                }

                return null;
            }
        }
    }
}
