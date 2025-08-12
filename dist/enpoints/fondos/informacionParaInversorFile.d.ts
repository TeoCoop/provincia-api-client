export = informacionParaElInversorFile;
declare function informacionParaElInversorFile({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateFile: ({ jwtToken, fileId, data }: {
        jwtToken: any;
        fileId: any;
        data: any;
    }) => any;
    deleteFile: ({ jwtToken, fileId }: {
        jwtToken: any;
        fileId: any;
    }) => any;
    getById: ({ fileId }: {
        fileId: any;
    }) => any;
    createFile: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
