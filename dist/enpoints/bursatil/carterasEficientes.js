"use strict";

function carterasEficientes(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var carteraId = _ref2.carteraId;
    return client({
      url: "/api/carteras-eficientes/".concat(carteraId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/api/carteras-eficientes",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function createCartera(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/api/carteras-eficientes",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        name: data.name,
        type: data.type,
        our_founds: data.our_founds,
        "delete": data["delete"]
      }
    });
  }
  function updateCartera(_ref4) {
    var jwtToken = _ref4.jwtToken,
      carteraId = _ref4.carteraId,
      data = _ref4.data;
    return client({
      url: "/api/carteras-eficientes/".concat(carteraId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          name: data.name,
          type: data.type,
          our_founds: data.our_founds,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteCartera(_ref5) {
    var jwtToken = _ref5.jwtToken,
      carteraId = _ref5.carteraId;
    return client({
      url: "/api/carteras-eficientes/".concat(carteraId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createCartera: createCartera,
    updateCartera: updateCartera,
    deleteCartera: deleteCartera
  };
}
module.exports = carterasEficientes;