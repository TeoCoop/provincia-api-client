export = blogMedia;
declare function blogMedia({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateBlogMedia: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteBlogMedia: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    uploadAndUpdate: ({ jwtToken, file, name }: {
        jwtToken: any;
        file: any;
        name: any;
    }) => Promise<any>;
};
