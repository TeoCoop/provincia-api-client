export = institutional;
declare function institutional({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateInstitutional: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteInstitutional: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
