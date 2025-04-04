export = founds;
declare function founds({ client }: {
    client: any;
}): {
    getById: ({ foundId }: {
        foundId: any;
    }) => any;
    getAll: () => any;
    createFound: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateFound: ({ jwtToken, foundId, data }: {
        jwtToken: any;
        foundId: any;
        data: any;
    }) => any;
    deleteFound: ({ jwtToken, foundId }: {
        jwtToken: any;
        foundId: any;
    }) => any;
};
