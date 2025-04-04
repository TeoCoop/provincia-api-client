function destacadosHome({ client }) {
  function getById({ destacadoId }) {
    return client({
      url: `/api/destacadps-bursatil/${destacadoId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/destacadps-bursatil`,
      method: "get",
    });
  }
  function updateDestacado({ jwtToken, destacadoId, data }) {
    return client({
      url: `/api/destacadps-bursatil/${destacadoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createDestacado({ jwtToken, data }) {
    return client({
      url: "/api/destacadps-bursatil",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function deleteDestacado({ jwtToken, destacadoId }) {
    return client({
      url: `/api/destacadps-bursatil/${destacadoId}`,
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
  };
}
module.exports = destacadosHome;
