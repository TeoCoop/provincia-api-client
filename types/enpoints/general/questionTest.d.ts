export = questionTest;
declare function questionTest({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateProduct: ({ jwtToken, questionId, data }: {
        jwtToken: any;
        questionId: any;
        data: any;
    }) => any;
    deleteProduct: ({ jwtToken, questionId }: {
        jwtToken: any;
        questionId: any;
    }) => any;
    getById: ({ questionId }: {
        questionId: any;
    }) => any;
    createQuestion: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
