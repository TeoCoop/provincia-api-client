export = informacionParaElInversor;
declare function informacionParaElInversor({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateInformacion: ({ jwtToken, infoId, data }: {
        jwtToken: any;
        infoId: any;
        data: any;
    }) => any;
    deleteInformacion: ({ jwtToken, infoId }: {
        jwtToken: any;
        infoId: any;
    }) => any;
    getById: ({ infoId }: {
        infoId: any;
    }) => any;
    createInformacion: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
