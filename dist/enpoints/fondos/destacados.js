"use strict";

function destacadoPopUp(_ref) {
  var client = _ref.client;
  function getAll(isPublic) {
    return client({
      url: "/api/destacado-fondo?public=".concat(isPublic),
      method: "get"
    });
  }
  function updateDestacado(_ref2) {
    var jwtToken = _ref2.jwtToken,
      data = _ref2.data;
    return client({
      url: "/api/destacado-fondo",
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: data
      }
    });
  }
  return {
    getAll: getAll,
    updateDestacado: updateDestacado
  };
}
module.exports = destacadoPopUp;