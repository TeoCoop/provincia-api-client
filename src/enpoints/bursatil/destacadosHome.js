function destacadosHome({ client }) {
  function getById({ destacadoId }) {
    return client({
      url: `/api/destacados-bursatils/${destacadoId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/destacados-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: "/api/destacados-bursatils/all",
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateDestacado({ jwtToken, destacadoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/destacados-bursatils/${destacadoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createDestacado({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/destacados-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteDestacado({ jwtToken, destacadoId }) {
    return client({
      url: `/api/destacados-bursatils/${destacadoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateDestacado,
    deleteDestacado,
    getById,
    createDestacado,
    getAllPanel,
  };
}
module.exports = destacadosHome;
