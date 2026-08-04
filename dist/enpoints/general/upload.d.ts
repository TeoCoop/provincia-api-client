export = upload;
declare function upload({ client }: {
    client: any;
}): {
    update: ({ jwtToken, file }: {
        file: any;
        jwtToken: any;
    }) => any;
};
