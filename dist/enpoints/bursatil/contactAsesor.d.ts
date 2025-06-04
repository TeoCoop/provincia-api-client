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
    createAsesor: ({ data }: {
        data: any;
    }) => any;
    updateContact: ({ jwtToken, asesorId, data }: {
        jwtToken: any;
        asesorId: any;
        data: any;
    }) => any;
    deleteAsesor: ({ jwtToken, asesorId }: {
        jwtToken: any;
        asesorId: any;
    }) => any;
};
