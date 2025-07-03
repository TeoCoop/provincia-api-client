export = cuotaParteFound;
declare function cuotaParteFound({ client }: {
    client: any;
}): {
    getAll: ({ numero_fondo, clase_fondo }: {
        numero_fondo: any;
        clase_fondo: any;
    }) => any;
    updateCuotaParte: ({ jwtToken, cuotaParteId, data }: {
        jwtToken: any;
        cuotaParteId: any;
        data: any;
    }) => any;
    deleteCuotaParte: ({ jwtToken, cuotaParteId }: {
        jwtToken: any;
        cuotaParteId: any;
    }) => any;
    getById: ({ cuotaParteId }: {
        cuotaParteId: any;
    }) => any;
    createCuotaParte: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
};
