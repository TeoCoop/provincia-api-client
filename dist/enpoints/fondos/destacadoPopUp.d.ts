export = destacadoPopUp;
declare function destacadoPopUp({ client }: {
    client: any;
}): {
    getAll: (isPublic: any) => any;
    updateDestacado: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ isPublic, jwtToken }: {
        isPublic: any;
        jwtToken: any;
    }) => any;
};
