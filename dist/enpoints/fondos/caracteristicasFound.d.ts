export = caracteristicasFound;
declare function caracteristicasFound({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateCaracteristica: ({ jwtToken, caracteristicaId, data }: {
        jwtToken: any;
        caracteristicaId: any;
        data: any;
    }) => any;
    deleteCaracteristica: ({ jwtToken, caracteristicaId }: {
        jwtToken: any;
        caracteristicaId: any;
    }) => any;
    getById: ({ caracteristicaId }: {
        caracteristicaId: any;
    }) => any;
    createCaracteristica: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
