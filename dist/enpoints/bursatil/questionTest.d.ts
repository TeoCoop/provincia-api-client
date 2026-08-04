export = questionTest;
declare function questionTest({ client }: {
    client: any;
}): {
    getAll: () => any;
    updatedQuestion: ({ jwtToken, questionId, data }: {
        data: any;
        jwtToken: any;
        questionId: any;
    }) => any;
    deleteCuestion: ({ jwtToken, questionId }: {
        jwtToken: any;
        questionId: any;
    }) => any;
    getById: ({ questionId }: {
        questionId: any;
    }) => any;
    createQuestion: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
