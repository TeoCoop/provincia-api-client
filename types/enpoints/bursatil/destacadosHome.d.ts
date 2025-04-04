export = destacadosHome;
declare function destacadosHome({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateDestacado: ({ jwtToken, destacadoId, data }: {
        jwtToken: any;
        destacadoId: any;
        data: any;
    }) => any;
    deleteDestacado: ({ jwtToken, destacadoId }: {
        jwtToken: any;
        destacadoId: any;
    }) => any;
    getById: ({ destacadoId }: {
        destacadoId: any;
    }) => any;
    createDestacado: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
