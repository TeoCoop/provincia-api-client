export = productBursatil;
declare function productBursatil({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateProduct: ({ jwtToken, productId, data }: {
        data: any;
        jwtToken: any;
        productId: any;
    }) => any;
    deleteProduct: ({ jwtToken, productId }: {
        jwtToken: any;
        productId: any;
    }) => any;
    getById: ({ productId }: {
        productId: any;
    }) => any;
    createProduct: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
