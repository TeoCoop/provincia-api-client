export = upload;
declare function upload({ client }: {
    client: any;
}): {
    uploadFile: ({ jwtToken, file }: {
        jwtToken: any;
        file: any;
    }) => any;
};
