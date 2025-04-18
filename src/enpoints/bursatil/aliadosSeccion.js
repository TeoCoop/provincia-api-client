function aliadosSeccion({ client }) {
  function get() {
    return client({
      url: `/api/aliados-seccion-bursatil`,
      method: "get",
    });
  }
  function updateAliadosSeccion({ jwtToken, data }) {
    return client({
      url: `/api/aliados-seccion-bursatil`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }

  function deleteAliadosSeccion({ jwtToken }) {
    return client({
      url: `/api/aliados-seccion-bursatil`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    get,
    updateAliadosSeccion,
    deleteAliadosSeccion,
  };
}

module.exports = aliadosSeccion;
