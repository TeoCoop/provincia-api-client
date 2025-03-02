export function client(options: any): {
    bursatil: {
        blog: {
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
        institutional: {
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            put: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
    };
    auth: {
        auth: ({ user }: {
            user: any;
        }) => any;
        login: ({ user }: {
            user: any;
        }) => any;
        verifyTotp: ({ user }: {
            user: any;
        }) => any;
    };
};
