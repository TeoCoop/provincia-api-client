export = informacionParaElInversorFile;
declare function informacionParaElInversorFile({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateFile: ({ jwtToken, fileId, data }: {
        data: any;
        fileId: any;
        jwtToken: any;
    }) => any;
    deleteFile: ({ jwtToken, fileId }: {
        fileId: any;
        jwtToken: any;
    }) => any;
    getById: ({ fileId }: {
        fileId: any;
    }) => any;
    createFile: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
