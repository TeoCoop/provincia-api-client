export = testInversor;
declare function testInversor({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateTest: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    deleteTest: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
