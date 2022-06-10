﻿using MediatR;
using Microsoft.EntityFrameworkCore;
using SpartanManageFootball.Application.Core;
using SpartanManageFootball.Interfaces;
using SpartanManageFootball.Models;
using SpartanManageFootball.Persistence;

namespace SpartanManageFootball.Application.Teams
{
    public class CreateTeams
    {
        public class TeamCommand : IRequest<Result<Squad>>
        {
            public int StadiumId { get; set; }
            public string Name { get; set; }
            public string City { get; set; }
            public bool isVerified { get; set; }
            public IFormFile File { get; set; }

            public class CommandHandler : IRequestHandler<TeamCommand, Result<Squad>>
            {
                private readonly SMFContext _context;
                private readonly IPhotoAccessor _photoAccessor;
                private readonly IUserAccessor _userAccessor;

                public CommandHandler(SMFContext context, IPhotoAccessor photoAccessor, IUserAccessor userAccessor)
                {
                    _context = context;
                    _photoAccessor = photoAccessor;
                    _userAccessor = userAccessor;
                }

                public async Task<Result<Squad>> Handle(TeamCommand request, CancellationToken cancellationToken)
                {
                    var user = await _context.Users.Include(p => p.Photos)
                    .FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

                    var photoResult = await _photoAccessor.AddPhoto(request.File);

                    var squad = new Squad
                    {
                        StadiumId = request.StadiumId,
                        Name = request.Name,
                        City = request.City,
                        photoNum = photoResult.PublicNum,
                        photoUrl = photoResult.VerifyUrl
                    };

                    await _context.Squads.AddAsync(squad);


                    var success = await _context.SaveChangesAsync() > 0;

                    if (success)
                    {
                        return Result<Squad>.Success(squad);
                    }

                    return Result<Squad>.Failure("Problem register squad");
                }

            }
        }
    }
}
