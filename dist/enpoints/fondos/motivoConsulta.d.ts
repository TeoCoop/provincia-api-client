export = motivoConsulta;
declare function motivoConsulta({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateMotivo: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    createMotivo: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteMotivo: ({ jwtToken, motivoId, data }: {
        data: any;
        jwtToken: any;
        motivoId: any;
    }) => any;
    getFront: () => any;
};
