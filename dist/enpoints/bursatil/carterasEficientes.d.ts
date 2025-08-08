export = carterasEficientes;
declare function carterasEficientes({ client }: {
    client: any;
}): {
    getById: ({ carteraId }: {
        carteraId: any;
    }) => any;
    getAll: () => any;
    createCartera: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateCartera: ({ jwtToken, carteraId, data }: {
        jwtToken: any;
        carteraId: any;
        data: any;
    }) => any;
    deleteCartera: ({ jwtToken, carteraId }: {
        jwtToken: any;
        carteraId: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
