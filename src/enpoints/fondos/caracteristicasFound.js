function caracteristicasFound({ client }) {
  function getById({ caracteristicaId }) {
    return client({
      url: `/api/caracteristicas-fondos/${caracteristicaId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/caracteristicas-fondos`,
      method: "get",
    });
  }
  function updateCaracteristica({ jwtToken, caracteristicaId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/caracteristicas-fondos/${caracteristicaId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createCaracteristica({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/caracteristicas-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteCaracteristica({ jwtToken, caracteristicaId }) {
    return client({
      url: `/api/caracteristicas-fondos/${caracteristicaId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateCaracteristica,
    deleteCaracteristica,
    getById,
    createCaracteristica,
  };
}
module.exports = caracteristicasFound;
