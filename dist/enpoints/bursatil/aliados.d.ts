export = aliados;
declare function aliados({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateAliado: ({ jwtToken, aliadoId, data }: {
        aliadoId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteAliado: ({ jwtToken, aliadoId }: {
        aliadoId: any;
        jwtToken: any;
    }) => any;
    getById: ({ aliadoId }: {
        aliadoId: any;
    }) => any;
    createAliado: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
