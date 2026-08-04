export = caracteristicasFound;
declare function caracteristicasFound({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateCaracteristica: ({ jwtToken, caracteristicaId, data }: {
        caracteristicaId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteCaracteristica: ({ jwtToken, caracteristicaId }: {
        caracteristicaId: any;
        jwtToken: any;
    }) => any;
    getById: ({ caracteristicaId }: {
        caracteristicaId: any;
    }) => any;
    createCaracteristica: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
