function faq({ client }) {
  function getById({ carteraId }) {
    return client({
      url: `/carteras-eficientes/${carteraId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/carteras-eficientes`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createCartera({ jwtToken, data }) {
    return client({
      url: `/carteras-eficientes`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        type: data.type,
        our_founds: data.our_founds,
      },
    });
  }

  function updateFaq({ jwtToken, carteraId, data }) {
    return client({
      url: `/carteras-eficientes/${carteraId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          name: data.name,
          type: data.type,
          our_founds: data.our_founds,
        },
      },
    });
  }

  function deleteFaq({ jwtToken, carteraId }) {
    return client({
      url: `/carteras-eficientes/${carteraId}`,
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
    updateFaq,
    deleteFaq,
  };
}

module.exports = faq;
