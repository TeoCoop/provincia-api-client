export = founds;
declare function founds({ client }: {
    client: any;
}): {
    getById: ({ foundId }: {
        foundId: any;
    }) => any;
    getAll: () => any;
    createFound: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateFound: ({ jwtToken, foundId, data }: {
        data: any;
        foundId: any;
        jwtToken: any;
    }) => any;
    deleteFound: ({ jwtToken, foundId }: {
        foundId: any;
        jwtToken: any;
    }) => any;
    getFilters: (caracteristicaDocumentId: any, tipoActivoDocumentId: any, valueInversorId: any) => any;
    getByDocumentId: ({ foundDocumentId }: {
        foundDocumentId: any;
    }) => any;
    getOnlyNameAndNumber: () => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    getMoneda: () => any;
};
