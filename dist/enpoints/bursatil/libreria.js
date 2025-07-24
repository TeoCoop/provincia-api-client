"use strict";

function libreriaBursatil(_ref) {
  var client = _ref.client;
  function getAll(_ref2) {
    var jwtToken = _ref2.jwtToken;
    return client({
      url: "/api/libreria-bursatil",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updateLibreriaBursatil(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/api/libreria-bursatil",
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
    updateLibreriaBursatil: updateLibreriaBursatil
  };
}
module.exports = libreriaBursatil;