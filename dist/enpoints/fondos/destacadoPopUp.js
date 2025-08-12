"use strict";

function destacadoPopUp(_ref) {
  var client = _ref.client;
  function getAll(isPublic) {
    return client({
      url: "/api/destacado-fondo?public=".concat(isPublic),
      method: "get"
    });
  }
  function getAllPanel(_ref2) {
    var isPublic = _ref2.isPublic,
      jwtToken = _ref2.jwtToken;
    return client({
      url: "/api/destacado-fondo?public=".concat(isPublic),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updateDestacado(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
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
    updateDestacado: updateDestacado,
    getAllPanel: getAllPanel
  };
}
module.exports = destacadoPopUp;