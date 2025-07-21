export = instrumento;
declare function instrumento({ client }: {
    client: any;
}): {
    getById: ({ instrumentoId }: {
        instrumentoId: any;
    }) => any;
    getAll: () => any;
    createInstrumento: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateInstrumento: ({ jwtToken, instrumentoId, data }: {
        jwtToken: any;
        instrumentoId: any;
        data: any;
    }) => any;
    deleteInstrumento: ({ jwtToken, instrumentoId }: {
        jwtToken: any;
        instrumentoId: any;
    }) => any;
};
