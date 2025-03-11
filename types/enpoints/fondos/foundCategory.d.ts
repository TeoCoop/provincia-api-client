export = faq;
declare function faq({ client }: {
    client: any;
}): {
    getById: ({ categoryId }: {
        categoryId: any;
    }) => any;
    getAll: () => any;
    createCategory: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateCategory: ({ jwtToken, categoryId, data }: {
        jwtToken: any;
        categoryId: any;
        data: any;
    }) => any;
    deleteCategory: ({ jwtToken, categoryId }: {
        jwtToken: any;
        categoryId: any;
    }) => any;
};
