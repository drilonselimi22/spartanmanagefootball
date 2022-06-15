using MediatR;
using SpartanManageFootball.Application.Core;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Players
{
    public class CreatePlayer
    {
        public class PlayerAddCommand : IRequest<Result<Player>>
        {
            public string Name { get; set; }
            public string LastName { get; set; }
            public int Age { get; set; }
            public int Number { get; set; }
            public string Position { get; set; }
            public int SuqadTeamId { get; set; }
            public object? SquadTeamId { get; internal set; }

            public class CommandHandler : IRequestHandler<PlayerAddCommand, Result<Player>>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Result<Player>> Handle(PlayerAddCommand request, CancellationToken cancellationToken)
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

                    await _context.Players.AddAsync(player);

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return Result<Player>.Success(player);
                    }
                    return Result<Player>.Failure("There was a problem saving changes");
                }
            }
        }
    }
}
