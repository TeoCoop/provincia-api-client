export = paletteAndColors;
declare function paletteAndColors({ client }: {
    client: any;
}): {
    getAllColor: () => any;
    getByIdColor: ({ colorId }: {
        colorId: any;
    }) => any;
    deleteColor: ({ jwtToken, colorId }: {
        jwtToken: any;
        colorId: any;
    }) => any;
    createColor: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    updateColor: ({ jwtToken, colorId, data }: {
        jwtToken: any;
        colorId: any;
        data: any;
    }) => any;
    getAllPalettes: () => any;
    updatePalette: ({ jwtToken, paletteId, data }: {
        jwtToken: any;
        paletteId: any;
        data: any;
    }) => any;
    deletePalette: ({ jwtToken, paletteId }: {
        jwtToken: any;
        paletteId: any;
    }) => any;
    getByIdPalette: ({ paletteId }: {
        paletteId: any;
    }) => any;
    createPalette: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
