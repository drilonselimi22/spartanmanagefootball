using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Players
{
    public class CreatePlayer
    {
        public class PlayerAddCommand : IRequest<Player>
        {
            public string Name { get; set; }
            public string LastName { get; set; }
            public int Age { get; set; }
            public int Number { get; set; }
            public string Position { get; set; }
            public int SuqadTeamId { get; set; }
            public object? SquadTeamId { get; internal set; }

            public class CommandHandler : IRequestHandler<PlayerAddCommand, Player>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Player> Handle(PlayerAddCommand request, CancellationToken cancellationToken)
                {
                    var player = new Player
                    {
                        Name = request.Name,
                        LastName = request.LastName,
                        Age = request.Age,
                        Number = request.Number,
                        Position = request.Position,
                        SquadTeamId = request.SuqadTeamId

                    };
                    _context.Players.AddAsync(player);
                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return player;
                    }
                    throw new Exception("Problem saving changes");
                }
            }

        }
    }
}
