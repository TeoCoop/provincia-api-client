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
        jwtToken: any;
        data: any;
        fileId: any;
    }) => any;
    createFile: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteFile: ({ jwtToken, fileId }: {
        jwtToken: any;
        fileId: any;
    }) => any;
    getById: ({ jwtToken, fileId }: {
        jwtToken: any;
        fileId: any;
    }) => any;
};
