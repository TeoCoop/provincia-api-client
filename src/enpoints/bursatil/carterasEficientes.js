function carterasEficientes({ client }) {
  function getById({ carteraId }) {
    return client({
      url: `/api/carteras-eficientes/${carteraId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/api/carteras-eficientes`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createCartera({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/carteras-eficientes`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateCartera({ jwtToken, carteraId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/carteras-eficientes/${carteraId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteCartera({ jwtToken, carteraId }) {
    return client({
      url: `/api/carteras-eficientes/${carteraId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createCartera,
    updateCartera,
    deleteCartera,
  };
}

module.exports = carterasEficientes;
