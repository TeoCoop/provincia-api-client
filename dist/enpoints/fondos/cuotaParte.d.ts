export = cuotaParteFound;
declare function cuotaParteFound({ client }: {
    client: any;
}): {
    getAll: ({ our_found, clase_fondo, page, pageSize }: {
        our_found: any;
        clase_fondo: any;
        page?: number | undefined;
        pageSize?: number | undefined;
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
    getByRange: ({ our_found, clase_fondo, fecha_inicio, fecha_fin, page, pageSize, }: {
        our_found: any;
        clase_fondo: any;
        fecha_inicio: any;
        fecha_fin: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    getTestingPermisosPanel: ({ jwtToken, numero_fondo, clase_fondo, page, pageSize, }: {
        jwtToken: any;
        numero_fondo: any;
        clase_fondo: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
};
