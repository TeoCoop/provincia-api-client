export = contactAsesor;
declare function contactAsesor({ client }: {
    client: any;
}): {
    getById: ({ jwtToken, asesorId }: {
        jwtToken: any;
        asesorId: any;
    }) => any;
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    createContact: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateContact: ({ jwtToken, asesorId, data }: {
        jwtToken: any;
        asesorId: any;
        data: any;
    }) => any;
    deleteContact: ({ jwtToken, asesorId }: {
        jwtToken: any;
        asesorId: any;
    }) => any;
};
