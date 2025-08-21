function nuestroEquipo({ client }) {
  function getAll() {
    return client({
      url: "/api/nuestro-equipo-fondo",
      method: "get",
    });
  }
  function updateNuestroEquipo({ jwtToken, data }) {
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
  function deleteNuestroEquipo({ jwtToken }) {
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
    updateNuestroEquipo,
    deleteNuestroEquipo,
  };
}
module.exports = nuestroEquipo;
