export = institutional;
declare function institutional({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateInstitutional: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteInstitutional: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
