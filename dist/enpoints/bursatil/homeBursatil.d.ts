export = homeBursatil;
declare function homeBursatil({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateHome: ({ jwtToken, homeCardId, data }: {
        data: any;
        homeCardId: any;
        jwtToken: any;
    }) => any;
    deleteHome: ({ jwtToken, homeCardId }: {
        homeCardId: any;
        jwtToken: any;
    }) => any;
    getById: ({ homeCardId }: {
        homeCardId: any;
    }) => any;
    createHome: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
