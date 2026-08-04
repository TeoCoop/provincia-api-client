export = faq;
declare function faq({ client }: {
    client: any;
}): {
    getById: ({ faqId }: {
        faqId: any;
    }) => any;
    getAll: () => any;
    createFaq: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateFaq: ({ jwtToken, faqId, data }: {
        data: any;
        faqId: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    deleteFaq: ({ jwtToken, faqId }: {
        faqId: any;
        jwtToken: any;
    }) => any;
};
