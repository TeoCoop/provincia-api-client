"use strict";

function founds(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var foundId = _ref2.foundId;
    return client({
      url: "/our-founds/".concat(foundId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/our-founds",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function createFound(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/our-founds",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
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
        "delete": data["delete"]
      }
    });
  }
  function updateFound(_ref4) {
    var jwtToken = _ref4.jwtToken,
      foundId = _ref4.foundId,
      data = _ref4.data;
    return client({
      url: "/our-founds/".concat(foundId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
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
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteFound(_ref5) {
    var jwtToken = _ref5.jwtToken,
      foundId = _ref5.foundId;
    return client({
      url: "/our-founds/".concat(foundId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createFound: createFound,
    updateFound: updateFound,
    deleteFound: deleteFound
  };
}
module.exports = founds;