export function client(options: any): {
    bursatil: {
        blog: {
            get: ({ jwtToken, blogId }: {
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
    };
};
