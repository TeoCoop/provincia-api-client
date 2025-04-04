export = upload;
declare function upload({ client }: {
    client: any;
}): {
    update: ({ jwtToken, file }: {
        jwtToken: any;
        file: any;
    }) => any;
};
