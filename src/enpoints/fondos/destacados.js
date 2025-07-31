function destacadoPopUp({ client }) {
  function getAll(isPublic) {
    return client({
      url: `/api/destacado-fondo?public=${isPublic}`,
      method: "get",
    });
  }
  function updateDestacado({ jwtToken, data }) {
    return client({
      url: "/api/destacado-fondo",
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
    updateDestacado,
  };
}
module.exports = destacadoPopUp;
