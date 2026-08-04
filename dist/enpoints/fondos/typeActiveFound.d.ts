export = typeActive;
declare function typeActive({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateActivo: ({ jwtToken, activoId, data }: {
        activoId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteActivo: ({ jwtToken, activoId }: {
        activoId: any;
        jwtToken: any;
    }) => any;
    getById: ({ activoId }: {
        activoId: any;
    }) => any;
    createActivo: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
