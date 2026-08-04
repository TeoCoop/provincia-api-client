export = libreriaBursatil;
declare function libreriaBursatil({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken, page, pageSize }: {
        jwtToken: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    updateFile: ({ jwtToken, data, fileId }: {
        data: any;
        fileId: any;
        jwtToken: any;
    }) => any;
    createFile: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    deleteFile: ({ jwtToken, fileId }: {
        fileId: any;
        jwtToken: any;
    }) => any;
    getById: ({ jwtToken, fileId }: {
        fileId: any;
        jwtToken: any;
    }) => any;
};
