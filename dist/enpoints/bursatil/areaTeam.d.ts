export = areasBursatil;
declare function areasBursatil({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateArea: ({ jwtToken, areaId, data }: {
        areaId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteArea: ({ jwtToken, areaId }: {
        areaId: any;
        jwtToken: any;
    }) => any;
    getById: ({ areaId }: {
        areaId: any;
    }) => any;
    createArea: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
