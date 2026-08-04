export = category;
declare function category({ client }: {
    client: any;
}): {
    getById: ({ categoryId }: {
        categoryId: any;
    }) => any;
    getAll: () => any;
    createCategory: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateCategory: ({ jwtToken, categoryId, data }: {
        categoryId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteCategory: ({ jwtToken, categoryId }: {
        categoryId: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
