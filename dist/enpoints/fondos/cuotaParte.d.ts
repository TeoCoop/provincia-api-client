export = cuotaParteFound;
declare function cuotaParteFound({ client }: {
    client: any;
}): {
    getAll: ({ our_found, clase_fondo, page, pageSize }: {
        clase_fondo: any;
        our_found: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    updateCuotaParte: ({ jwtToken, cuotaParteId, data }: {
        cuotaParteId: any;
        data: any;
        jwtToken: any;
    }) => any;
    deleteCuotaParte: ({ jwtToken, cuotaParteId }: {
        cuotaParteId: any;
        jwtToken: any;
    }) => any;
    getById: ({ cuotaParteId }: {
        cuotaParteId: any;
    }) => any;
    createCuotaParte: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getByRange: ({ our_found, clase_fondo, fecha_inicio, fecha_fin, page, pageSize, }: {
        clase_fondo: any;
        fecha_fin: any;
        fecha_inicio: any;
        our_found: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
    getTestingPermisosPanel: ({ jwtToken, our_found, clase_fondo, page, pageSize, }: {
        clase_fondo: any;
        jwtToken: any;
        our_found: any;
        page?: number | undefined;
        pageSize?: number | undefined;
    }) => any;
};
