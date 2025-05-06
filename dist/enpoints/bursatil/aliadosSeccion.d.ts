export = aliadosSeccion;
declare function aliadosSeccion({ client }: {
    client: any;
}): {
    get: () => any;
    updateAliadosSeccion: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    deleteAliadosSeccion: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
