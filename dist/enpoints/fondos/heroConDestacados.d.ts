export = destacadoPopUp;
declare function destacadoPopUp({ client }: {
    client: any;
}): {
    getFromFront: () => any;
    getPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
    updateDestacado: ({ jwtToken, destacadoId, data }: {
        jwtToken: any;
        destacadoId: any;
        data: any;
    }) => any;
};
