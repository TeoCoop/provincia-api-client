export = dinamicLanding;
declare function dinamicLanding({ client }: {
    client: any;
}): {
    getAll: () => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateLanding: ({ jwtToken, data, ladingId }: {
        data: any;
        jwtToken: any;
        ladingId: any;
    }) => any;
    createLanding: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteLanding: ({ jwtToken, ladingId, data }: {
        data: any;
        jwtToken: any;
        ladingId: any;
    }) => any;
};
