export = contactNewsleter;
declare function contactNewsleter({ client }: {
    client: any;
}): {
    getById: ({ jwtToken, contactId }: {
        contactId: any;
        jwtToken: any;
    }) => any;
    getAll: ({ jwtToken, page, pageSize }: {
        jwtToken: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    createContact: ({ data }: {
        data: any;
    }) => any;
    updateContact: ({ jwtToken, contactId, data }: {
        contactId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteContact: ({ jwtToken, contactId }: {
        contactId: any;
        jwtToken: any;
    }) => any;
};
