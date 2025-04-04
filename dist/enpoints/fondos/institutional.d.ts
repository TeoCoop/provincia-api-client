export = institutional;
declare function institutional({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateInstitutional: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    deleteInstitutional: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
