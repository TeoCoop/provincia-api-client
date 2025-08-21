export = nuestroEquipo;
declare function nuestroEquipo({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateNuestroEquipo: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteNuestroEquipo: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
