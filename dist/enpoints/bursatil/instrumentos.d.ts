export = instrumento;
declare function instrumento({ client }: {
    client: any;
}): {
    getById: ({ instrumentoId }: {
        instrumentoId: any;
    }) => any;
    getAll: () => any;
    createInstrumento: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateInstrumento: ({ jwtToken, instrumentoId, data }: {
        data: any;
        instrumentoId: any;
        jwtToken: any;
    }) => any;
    deleteInstrumento: ({ jwtToken, instrumentoId }: {
        instrumentoId: any;
        jwtToken: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
