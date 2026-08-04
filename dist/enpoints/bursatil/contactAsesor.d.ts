export = contactAsesor;
declare function contactAsesor({ client }: {
    client: any;
}): {
    getById: ({ jwtToken, asesorId }: {
        asesorId: any;
        jwtToken: any;
    }) => any;
    getAll: ({ jwtToken, page, pageSize }: {
        jwtToken: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    createAsesor: ({ data }: {
        data: any;
    }) => any;
    updateContact: ({ jwtToken, asesorId, data }: {
        asesorId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteAsesor: ({ jwtToken, asesorId }: {
        asesorId: any;
        jwtToken: any;
    }) => any;
};
