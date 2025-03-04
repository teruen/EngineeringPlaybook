    public ngOnInit(): void {

        // Grab both of these as observables, because I want to combine them into an array of RoleDropdown
        let rolesObs: Observable<RolesAvailableToRequestForCurrentUserDTO[]> = this.roleRequestService.getRolesAvailableForRequestForCurrentUser();
        let roleGroupsObs: Observable<RolesGroupsDto[]> = this.roleRequestService.getGroups();

        // The combineLatest operator is used when you have multiple observables that rely on each other.
        // In this case, I want to map the group name to the RoleDropdown objects in the array so the amount of data
        // being sent across is smaller, but I don't want to start mapping until BOTH observables have returned data.
        combineLatest([roleGroupsObs, rolesObs]).pipe(
            map(([roleGroups, roles] : [RolesGroupsDto[], RolesAvailableToRequestForCurrentUserDTO[]]) => {
                const roleGroupMap = new Map<number, string>();

                // Create a map for quick lookup of RoleGroup names by id
                roleGroups.forEach((group: RolesGroupsDto) => {
                    roleGroupMap.set(group.id, group.display_name);
                });

                // Merge the roles with their respective RoleGroup display names
                const groupedRoles: { [key: string]: RoleDropdown[] } = {};
                roles.forEach((role: RolesAvailableToRequestForCurrentUserDTO) => {
                    const groupName = roleGroupMap.get(role.groups_id) || 'UNKNOWN';
                    if (!groupedRoles[groupName]) {
                        groupedRoles[groupName] = [];
                    }
                    groupedRoles[groupName].push(
                        {
                            id: role.id,
                            display_name: role.display_name,
                            role_description: role.role_description,
                            role_group_name: groupName,
                    });
                });

                return groupedRoles
            })
        ).subscribe((groupedRoles: { [p: string]: RoleDropdown[] }) => {
            this.groupedRoles.next(groupedRoles);
        });