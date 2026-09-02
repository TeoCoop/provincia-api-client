export = motivoConsulta;
declare function motivoConsulta({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateForm: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    createForm: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteForm: ({ jwtToken, motivoId, data }: {
        data: any;
        jwtToken: any;
        motivoId: any;
    }) => any;
};
