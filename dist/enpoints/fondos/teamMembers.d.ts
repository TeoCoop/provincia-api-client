export = teamFondos;
declare function teamFondos({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateMember: ({ jwtToken, memberId, data }: {
        data: any;
        jwtToken: any;
        memberId: any;
    }) => any;
    deleteMember: ({ jwtToken, memberId }: {
        jwtToken: any;
        memberId: any;
    }) => any;
    getById: ({ memberId }: {
        memberId: any;
    }) => any;
    createMember: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
