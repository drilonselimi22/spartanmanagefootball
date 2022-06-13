﻿using MediatR;
using SpartanManageFootball.Interfaces;

namespace SpartanManageFootball.Application.Admin.UsersRole
{
    public class AssignUsersRole
    {
        public class AssignUsersRoleCommand : IRequest<int>
        {
            public string UserName { get; set; }
            public IList<string> Roles { get; set; }
        }

        public class AssignUsersRoleCommandHandler : IRequestHandler<AssignUsersRoleCommand, int>
        {
            private readonly IIdentityService _identityService;

            public AssignUsersRoleCommandHandler(IIdentityService identityService)
            {
                _identityService = identityService;
            }
            public async Task<int> Handle(AssignUsersRoleCommand request, CancellationToken cancellationToken)
            {
                var result = await _identityService.AssignUserToRole(request.UserName, request.Roles);
                return result ? 1 : 0;
            }
        }
    }
}

