export = global;
declare function global({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateGlobal: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteGlobal: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
