function cuotaParteFound({ client }) {
  function getById({ cuotaParteId }) {
    return client({
      url: `/api/cuota-partes/${cuotaParteId}`,
      method: "get",
    });
  }
  function getAll({ our_found, clase_fondo, page = 1, pageSize = 20 }) {
    const params = new URLSearchParams({
      our_found: String(our_found),
      clase_fondo,
      page: String(page),
      pageSize: String(pageSize),
    });

    return client({
      url: `/api/cuota-partes?${params.toString()}`,
      method: "get",
    });
  }
  function getTestingPermisosPanel({
    jwtToken,
    our_found,
    clase_fondo,
    page = 1,
    pageSize = 1,
  }) {
    const params = new URLSearchParams({
      our_found: String(our_found),
      clase_fondo,
      page: String(page),
      pageSize: String(pageSize),
    });

    return client({
      url: `/api/cuota-partes?${params.toString()}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function getByRange({
    our_found,
    clase_fondo,
    fecha_inicio,
    fecha_fin,
    page = 1,
    pageSize = 20,
  }) {
    const params = new URLSearchParams({
      our_found: String(our_found),
      clase_fondo,
      fecha_inicio,
      fecha_fin,
      page: String(page),
      pageSize: String(pageSize),
    });

    return client({
      url: `/api/cuota-partes?${params.toString()}`,
      method: "get",
    });
  }
  function updateCuotaParte({ jwtToken, cuotaParteId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/cuota-partes/${cuotaParteId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createCuotaParte({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/cuota-partes",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteCuotaParte({ jwtToken, cuotaParteId }) {
    return client({
      url: `/api/cuota-partes/${cuotaParteId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateCuotaParte,
    deleteCuotaParte,
    getById,
    createCuotaParte,
    getByRange,
    getTestingPermisosPanel,
  };
}
module.exports = cuotaParteFound;
