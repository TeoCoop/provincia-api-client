export = typeActive;
declare function typeActive({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateActivo: ({ jwtToken, activoId, data }: {
        jwtToken: any;
        activoId: any;
        data: any;
    }) => any;
    deleteActivo: ({ jwtToken, activoId }: {
        jwtToken: any;
        activoId: any;
    }) => any;
    getById: ({ activoId }: {
        activoId: any;
    }) => any;
    createActivo: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
