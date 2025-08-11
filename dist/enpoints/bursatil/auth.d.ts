export = auth;
declare function auth({ client }: {
    client: any;
}): {
    auth: ({ user }: {
        user: any;
    }) => any;
    login: ({ user, access_token }: {
        user: any;
        access_token: any;
    }) => any;
    verifyTotp: ({ user, access_token }: {
        user: any;
        access_token: any;
    }) => any;
};
