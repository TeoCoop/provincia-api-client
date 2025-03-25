"use strict";

function founds(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var foundId = _ref2.foundId;
    return client({
      url: "/our-founds/".concat(foundId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/our-founds",
      method: "get"
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
// curl --request POST \
//     --header 'content-type: application/json' \
//     --url http://localhost:1337/graphql \
//     --data '{"query":"query ExampleQuery {\n  cuotaPartes(\n    filters: {\n      fecha: {\n        gte: \"2025-03-18\", \n        lte: \"2025-03-19\"\n      },\n      fondo: { numero_fondo: { eq: 9 } } }\n  ) {\n    documentId\n    valor\n    fecha\n    fondo {\n      numero_fondo\n      name\n    }\n  }\n}","variables":{}}'