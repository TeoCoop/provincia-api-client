export = destacadoHero;
declare function destacadoHero({ client }: {
    client: any;
}): {
    getFromFront: () => any;
    getPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateDestacado: ({ jwtToken, destacadoId, data }: {
        data: any;
        destacadoId: any;
        jwtToken: any;
    }) => any;
    createDestacado: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
};
