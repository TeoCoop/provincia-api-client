export = contactNewsleter;
declare function contactNewsleter({ client }: {
    client: any;
}): {
    getById: ({ jwtToken, contactId }: {
        jwtToken: any;
        contactId: any;
    }) => any;
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    createAsociado: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateAsociado: ({ jwtToken, contactId, data }: {
        jwtToken: any;
        contactId: any;
        data: any;
    }) => any;
    deleteAsociado: ({ jwtToken, contactId }: {
        jwtToken: any;
        contactId: any;
    }) => any;
};
