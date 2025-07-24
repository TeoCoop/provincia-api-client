function libreriaFondos({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: "/api/libreria-fondo",
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateLibreriaFondos({ jwtToken, data }) {
    return client({
      url: "/api/libreria-fondo",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data,
      },
    });
  }

  return {
    getAll,
    updateLibreriaFondos,
  };
}
module.exports = libreriaFondos;
