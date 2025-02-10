export = auth;
declare function auth({ client }: {
    client: any;
}): {
    auth: ({ user }: {
        user: any;
    }) => any;
};
