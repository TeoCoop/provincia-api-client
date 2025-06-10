export = homeFondos;
declare function homeFondos({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateHome: ({ jwtToken, homeCardId, data }: {
        jwtToken: any;
        homeCardId: any;
        data: any;
    }) => any;
    deleteHome: ({ jwtToken, homeCardId }: {
        jwtToken: any;
        homeCardId: any;
    }) => any;
    getById: ({ homeCardId }: {
        homeCardId: any;
    }) => any;
    createHome: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
