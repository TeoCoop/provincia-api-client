export = libreriaFondos;
declare function libreriaFondos({ client }: {
    client: any;
}): {
    getAll: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateLibreriaFondos: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
