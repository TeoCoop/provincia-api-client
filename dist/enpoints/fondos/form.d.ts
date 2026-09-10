export = form;
declare function form({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken, page, pageSize }: {
        jwtToken: any;
        page?: number | undefined;
        pageSize?: number | undefined;
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
