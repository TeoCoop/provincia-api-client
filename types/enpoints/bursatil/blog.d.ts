export = blog;
declare function blog({ client }: {
    client: any;
}): {
    getById: ({ jwtToken, blogId }: {
        jwtToken: any;
        blogId: any;
    }) => any;
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    createBlog: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateBlog: ({ jwtToken, blogId, data }: {
        jwtToken: any;
        blogId: any;
        data: any;
    }) => any;
    deleteBlog: ({ jwtToken, blogId }: {
        jwtToken: any;
        blogId: any;
    }) => any;
};
