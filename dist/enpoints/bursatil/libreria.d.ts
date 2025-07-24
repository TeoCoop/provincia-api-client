export = libreriaBursatil;
declare function libreriaBursatil({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateLibreriaBursatil: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
