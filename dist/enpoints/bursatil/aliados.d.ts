export = aliados;
declare function aliados({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateAliado: ({ jwtToken, aliadoId, data }: {
        jwtToken: any;
        aliadoId: any;
        data: any;
    }) => any;
    deleteAliado: ({ jwtToken, aliadoId }: {
        jwtToken: any;
        aliadoId: any;
    }) => any;
    getById: ({ aliadoId }: {
        aliadoId: any;
    }) => any;
    createAliado: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
