function founds({ client }) {
  function getById({ foundId }) {
    return client({
      url: `/our-founds/${foundId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/our-founds`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createFound({ jwtToken, data }) {
    return client({
      url: `/our-founds`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        description: data.description,
        performances: data.performances,
        holdings: data.holdings,
        shareValues: data.shareValues,
        factSheet: data.factSheet,
        code: data.code,
        informationAt: data.informationAt,
        patrimonio: data.patrimonio,
        fund_category_fondo: data.fund_category_fondo,
        carteras_eficiente: data.carteras_eficiente,
      },
    });
  }

  function updateFound({ jwtToken, foundId, data }) {
    return client({
      url: `/our-founds/${foundId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          name: data.name,
          description: data.description,
          performances: data.performances,
          holdings: data.holdings,
          shareValues: data.shareValues,
          factSheet: data.factSheet,
          code: data.code,
          informationAt: data.informationAt,
          patrimonio: data.patrimonio,
          fund_category_fondo: data.fund_category_fondo,
          carteras_eficiente: data.carteras_eficiente,
        },
      },
    });
  }

  function deleteFound({ jwtToken, foundId }) {
    return client({
      url: `/our-founds/${foundId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createFound,
    updateFound,
    deleteFound,
  };
}

module.exports = founds;
