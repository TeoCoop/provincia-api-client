export = destacadosHome;
declare function destacadosHome({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateDestacado: ({ jwtToken, destacadoId, data }: {
        data: any;
        destacadoId: any;
        jwtToken: any;
    }) => any;
    deleteDestacado: ({ jwtToken, destacadoId }: {
        destacadoId: any;
        jwtToken: any;
    }) => any;
    getById: ({ destacadoId }: {
        destacadoId: any;
    }) => any;
    createDestacado: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
