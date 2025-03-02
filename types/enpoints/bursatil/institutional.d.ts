export = institutional;
declare function institutional({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    put: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteInstitutional: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
