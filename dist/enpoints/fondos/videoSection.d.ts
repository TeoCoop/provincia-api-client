export = videoSeccion;
declare function videoSeccion({ client }: {
    client: any;
}): {
    getById: ({ videoId }: {
        videoId: any;
    }) => any;
    getAll: () => any;
    createVideo: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateVideo: ({ jwtToken, videoId, data }: {
        jwtToken: any;
        videoId: any;
        data: any;
    }) => any;
    deleteVideo: ({ jwtToken, videoId }: {
        jwtToken: any;
        videoId: any;
    }) => any;
};
