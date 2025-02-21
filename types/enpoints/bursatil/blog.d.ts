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
};
