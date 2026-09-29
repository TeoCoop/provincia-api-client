export = form;
declare function form({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken, page, pageSize, search, motivoDocumentId, dateFrom, dateTo, }: {
        jwtToken: string;
        page?: number;
        pageSize?: number;
        search?: string;
        motivoDocumentId?: string;
        dateFrom?: string;
        dateTo?: string;
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
