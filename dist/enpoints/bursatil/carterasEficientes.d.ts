export = carterasEficientes;
declare function carterasEficientes({ client }: {
    client: any;
}): {
    getById: ({ carteraId }: {
        carteraId: any;
    }) => any;
    getAll: () => any;
    createCartera: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateCartera: ({ jwtToken, carteraId, data }: {
        carteraId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteCartera: ({ jwtToken, carteraId }: {
        carteraId: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
