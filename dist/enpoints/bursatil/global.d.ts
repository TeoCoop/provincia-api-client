export = global;
declare function global({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateGlobal: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteGlobal: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
