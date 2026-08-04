export = testInversor;
declare function testInversor({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateTest: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteTest: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
