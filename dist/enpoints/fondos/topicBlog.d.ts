export = topicBlog;
declare function topicBlog({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateTopic: ({ jwtToken, topicId, data }: {
        jwtToken: any;
        topicId: any;
        data: any;
    }) => any;
    deleteTopic: ({ jwtToken, topicId }: {
        jwtToken: any;
        topicId: any;
    }) => any;
    getById: ({ topicId }: {
        topicId: any;
    }) => any;
    createTopic: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
