function cuotaParteFound({ client }) {
  function getById({ cuotaParteId }) {
    return client({
      url: `/api/cuota-partes/${cuotaParteId}`,
      method: "get",
    });
  }
  function getAll({ numero_fondo, clase_fondo }) {
    return client({
      url: `/api/cuota-partes?filters%5Bnumero_fondo%5D[$eq]=${numero_fondo}&filters%5Bclase_fondo%5D[$eq]=${clase_fondo}`,
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
  };
}
module.exports = cuotaParteFound;
