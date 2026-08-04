export = paletteAndColors;
declare function paletteAndColors({ client }: {
    client: any;
}): {
    getAllColor: () => any;
    getByIdColor: ({ colorId }: {
        colorId: any;
    }) => any;
    deleteColor: ({ jwtToken, colorId }: {
        colorId: any;
        jwtToken: any;
    }) => any;
    createColor: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    updateColor: ({ jwtToken, colorId, data }: {
        colorId: any;
        data: any;
        jwtToken: any;
    }) => any;
    getAllPalettes: () => any;
    updatePalette: ({ jwtToken, paletteId, data }: {
        data: any;
        jwtToken: any;
        paletteId: any;
    }) => any;
    deletePalette: ({ jwtToken, paletteId }: {
        jwtToken: any;
        paletteId: any;
    }) => any;
    getByIdPalette: ({ paletteId }: {
        paletteId: any;
    }) => any;
    createPalette: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
};
