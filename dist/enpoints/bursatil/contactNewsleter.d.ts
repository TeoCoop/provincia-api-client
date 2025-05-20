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
    createContact: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateContact: ({ jwtToken, contactId, data }: {
        jwtToken: any;
        contactId: any;
        data: any;
    }) => any;
    deleteContact: ({ jwtToken, contactId }: {
        jwtToken: any;
        contactId: any;
    }) => any;
};
