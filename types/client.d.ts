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
