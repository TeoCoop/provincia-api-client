export = questionTest;
declare function questionTest({ client }: {
    client: any;
}): {
    getAll: () => any;
    updatedQuestion: ({ jwtToken, questionId, data }: {
        jwtToken: any;
        questionId: any;
        data: any;
    }) => any;
    deleteCuestion: ({ jwtToken, questionId }: {
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
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
