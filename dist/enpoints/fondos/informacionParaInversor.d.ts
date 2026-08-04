export = informacionParaElInversor;
declare function informacionParaElInversor({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateInformacion: ({ jwtToken, infoId, data }: {
        data: any;
        infoId: any;
        jwtToken: any;
    }) => any;
    deleteInformacion: ({ jwtToken, infoId }: {
        infoId: any;
        jwtToken: any;
    }) => any;
    getById: ({ infoId }: {
        infoId: any;
    }) => any;
    createInformacion: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
