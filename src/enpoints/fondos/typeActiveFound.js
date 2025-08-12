function typeActive({ client }) {
  function getById({ activoId }) {
    return client({
      url: `/api/tipos-activos-fondos/${activoId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/tipos-activos-fondos`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/tipos-activos-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateActivo({ jwtToken, activoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/tipos-activos-fondos/${activoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createActivo({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/tipos-activos-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteActivo({ jwtToken, activoId }) {
    return client({
      url: `/api/tipos-activos-fondos/${activoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateActivo,
    deleteActivo,
    getById,
    createActivo,
    getAllPanel,
  };
}
module.exports = typeActive;
