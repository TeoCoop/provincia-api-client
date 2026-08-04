export = categoriesVideos;
declare function categoriesVideos({ client }: {
    client: any;
}): {
    getById: ({ categoriesId }: {
        categoriesId: any;
    }) => any;
    getAll: () => any;
    createCategoriesVideos: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateCategoriesVideos: ({ jwtToken, categoriesId, data }: {
        categoriesId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteCategoriesVideos: ({ jwtToken, categoriesId }: {
        categoriesId: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
