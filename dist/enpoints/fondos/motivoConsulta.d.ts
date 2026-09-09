export = motivoConsulta;
declare function motivoConsulta({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateMotivo: ({ jwtToken, documentId, data }: {
        data: any;
        documentId: any;
        jwtToken: any;
    }) => any;
    createMotivo: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteMotivo: ({ jwtToken, documentId, data }: {
        data: any;
        documentId: any;
        jwtToken: any;
    }) => any;
    getFront: () => any;
};
