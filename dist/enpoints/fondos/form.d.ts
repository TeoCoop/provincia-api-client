export = form;
declare function form({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken, page, pageSize, search, motivoDocumentId, dateFrom, dateTo, }: {
        dateFrom?: undefined;
        dateTo?: undefined;
        jwtToken: any;
        motivoDocumentId?: undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        search?: undefined;
    }) => any;
    updateForm: ({ jwtToken, documentId, data }: {
        data: any;
        documentId: any;
        jwtToken: any;
    }) => any;
    createForm: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteForm: ({ jwtToken, documentId, data }: {
        data: any;
        documentId: any;
        jwtToken: any;
    }) => any;
};
