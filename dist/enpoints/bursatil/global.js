"use strict";

function global(_ref) {
  var client = _ref.client;
  function getAll() {
    return client({
      url: "/api/global-bursatil",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateGlobal(_ref2) {
    var jwtToken = _ref2.jwtToken,
      data = _ref2.data;
    return client({
      url: "/api/global-bursatil",
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          siteName: data.siteName,
          favicon: data.favicon,
          siteDescription: data.siteDescription,
          defaultSeo: data.defaultSeo,
          palette: data.palette,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteGlobal(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/global-bursatil",
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateGlobal: updateGlobal,
    deleteGlobal: deleteGlobal
  };
}
module.exports = global;