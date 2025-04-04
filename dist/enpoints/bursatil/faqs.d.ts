export = faq;
declare function faq({ client }: {
    client: any;
}): {
    getById: ({ faqId }: {
        faqId: any;
    }) => any;
    getAll: () => any;
    createFaq: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateFaq: ({ jwtToken, faqId, data }: {
        jwtToken: any;
        faqId: any;
        data: any;
    }) => any;
    deleteFaq: ({ jwtToken, faqId }: {
        jwtToken: any;
        faqId: any;
    }) => any;
};
