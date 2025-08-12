export = areasFondos;
declare function areasFondos({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateArea: ({ jwtToken, areaId, data }: {
        jwtToken: any;
        areaId: any;
        data: any;
    }) => any;
    deleteArea: ({ jwtToken, areaId }: {
        jwtToken: any;
        areaId: any;
    }) => any;
    getById: ({ areaId }: {
        areaId: any;
    }) => any;
    createArea: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
