export = productBursatil;
declare function productBursatil({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateProduct: ({ jwtToken, productId, data }: {
        jwtToken: any;
        productId: any;
        data: any;
    }) => any;
    deleteProduct: ({ jwtToken, productId }: {
        jwtToken: any;
        productId: any;
    }) => any;
    getById: ({ productId }: {
        productId: any;
    }) => any;
    createProduct: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
