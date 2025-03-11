export = blog;
declare function blog({ client }: {
    client: any;
}): {
    getById: ({ blogId }: {
        blogId: any;
    }) => any;
    getAll: () => any;
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
