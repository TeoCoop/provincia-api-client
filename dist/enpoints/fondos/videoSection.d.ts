export = videoSeccion;
declare function videoSeccion({ client }: {
    client: any;
}): {
    getById: ({ videoId }: {
        videoId: any;
    }) => any;
    getAll: () => any;
    createVideo: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateVideo: ({ jwtToken, videoId, data }: {
        data: any;
        jwtToken: any;
        videoId: any;
    }) => any;
    deleteVideo: ({ jwtToken, videoId }: {
        jwtToken: any;
        videoId: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
