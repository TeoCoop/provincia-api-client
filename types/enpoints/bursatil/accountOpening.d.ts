export = account;
declare function account({ client }: {
    client: any;
}): {
    getById: ({ accountId }: {
        accountId: any;
    }) => any;
    getAll: () => any;
    createAccount: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateAccount: ({ jwtToken, accountId, data }: {
        jwtToken: any;
        accountId: any;
        data: any;
    }) => any;
    deleteAccount: ({ jwtToken, accountId }: {
        jwtToken: any;
        accountId: any;
    }) => any;
};
