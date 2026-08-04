export = blog;
declare function blog({ client }: {
    client: any;
}): {
    getById: ({ blogId }: {
        blogId: any;
    }) => any;
    getAll: () => any;
    createBlog: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateBlog: ({ jwtToken, blogId, data }: {
        blogId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteBlog: ({ jwtToken, blogId }: {
        blogId: any;
        jwtToken: any;
    }) => any;
    getFilters: ({ year, topicDocumentId, categoryDocumentId, search }: {
        categoryDocumentId: any;
        search: any;
        topicDocumentId: any;
        year: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
