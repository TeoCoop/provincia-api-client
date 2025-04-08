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
  function getPanel() {
    return client({
      url: "/api/destacados-bursatils/all",
      method: "get",
    });
  }
  function updateDestacado({ jwtToken, destacadoId, data }) {
    return client({
      url: `/api/destacados-bursatils/${destacadoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createDestacado({ jwtToken, data }) {
    return client({
      url: "/api/destacados-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
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
    getPanel,
  };
}
module.exports = destacadosHome;
