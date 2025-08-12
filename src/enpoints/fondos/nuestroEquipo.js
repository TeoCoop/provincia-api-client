function nuestroEquipo({ client }) {
  function getAll() {
    return client({
      url: "/api/nuestro-equipo-fondo",
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: "/api/nuestro-equipo-fondo",
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateInstitutional({ jwtToken }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/nuestro-equipo-fondo",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: "/api/nuestro-equipo-fondo",
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateInstitutional,
    deleteInstitutional,
    getAllPanel,
  };
}
module.exports = nuestroEquipo;
