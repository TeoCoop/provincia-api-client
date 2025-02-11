export function client(options: any): {
    _createClient: import("axios").AxiosInstance;
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
        auth: {
            auth: ({ user }: {
                user: any;
            }) => any;
        };
    };
};
