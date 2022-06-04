﻿using MediatR;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.RefereesOperations
{
    public class CreateReferee
    {
        public class RefereeCommand : IRequest<Referee>
        {
            public string Name { get; set; }
            public string LastName { get; set; }
            public string Experience { get; set; }
            public string City { get; set; }
            public string Position { get; set; }
            public class CommandHandler : IRequestHandler<RefereeCommand, Referee>
            {
                private readonly SMFContext _context;

                public CommandHandler(SMFContext context)
                {
                    _context = context;
                }

                public async Task<Referee> Handle(RefereeCommand request, CancellationToken cancellationToken)
                {
                    var referee = new Referee
                    {
                        Name = request.Name,
                        LastName = request.LastName,
                        Experience = request.Experience,
                        City = request.City,
                        Position = request.Position,
                    };

                    await _context.Referees.AddAsync(referee);

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return referee;
                    }
                    throw new Exception("Problem saving changes");
                }
            }
        }
    }
}
