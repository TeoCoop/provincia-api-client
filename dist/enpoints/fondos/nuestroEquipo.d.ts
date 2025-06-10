export = nuestroEquipo;
declare function nuestroEquipo({ client }: {
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
