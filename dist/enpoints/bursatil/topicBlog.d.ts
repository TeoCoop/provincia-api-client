export = topicBlog;
declare function topicBlog({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateTopic: ({ jwtToken, topicId, data }: {
        data: any;
        jwtToken: any;
        topicId: any;
    }) => any;
    deleteTopic: ({ jwtToken, topicId }: {
        jwtToken: any;
        topicId: any;
    }) => any;
    getById: ({ topicId }: {
        topicId: any;
    }) => any;
    createTopic: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
