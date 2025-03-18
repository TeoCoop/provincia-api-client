export = categoriesVideos;
declare function categoriesVideos({ client }: {
    client: any;
}): {
    getById: ({ categoriesId }: {
        categoriesId: any;
    }) => any;
    getAll: () => any;
    createCategoriesVideos: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateCategoriesVideos: ({ jwtToken, categoriesId, data }: {
        jwtToken: any;
        categoriesId: any;
        data: any;
    }) => any;
    deleteCategoriesVideos: ({ jwtToken, categoriesId }: {
        jwtToken: any;
        categoriesId: any;
    }) => any;
};
