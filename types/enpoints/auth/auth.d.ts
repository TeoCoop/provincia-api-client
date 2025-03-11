export = auth;
declare function auth({ client }: {
    client: any;
}): {
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
