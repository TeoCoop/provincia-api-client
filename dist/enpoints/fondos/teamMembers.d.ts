export = teamFondos;
declare function teamFondos({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateMember: ({ jwtToken, memberId, data }: {
        jwtToken: any;
        memberId: any;
        data: any;
    }) => any;
    deleteMember: ({ jwtToken, memberId }: {
        jwtToken: any;
        memberId: any;
    }) => any;
    getById: ({ memberId }: {
        memberId: any;
    }) => any;
    createMember: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
