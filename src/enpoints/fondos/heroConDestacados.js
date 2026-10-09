///api/home-destacados
function destacadoHero({ client }) {
  function getFromFront() {
    return client({
      url: `/api/home-destacados`,
      method: "get",
    });
  }
  function getPanel({ jwtToken }) {
    return client({
      url: `/api/destacados-home-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function createDestacado({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/destacados-home-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateDestacado({ jwtToken, destacadoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/destacados-home-fondos/${destacadoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  return {
    getFromFront,
    getPanel,
    updateDestacado,
    createDestacado,
  };
}
module.exports = destacadoHero;
