"use strict";

function institutional(_ref) {
  var client = _ref.client;
  function getAll(_ref2) {
    var jwtToken = _ref2.jwtToken;
    return client({
      url: "/institutional-bursatil",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function put(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/institutional-bursatil",
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          mision: data.mision,
          vision: data.vision,
          values: data.values,
          team: data.team,
          code_of_conduct: data.code_of_conduct,
          directory: data.directory
        }
      }
    });
  }
  function deleteInstitutional(_ref4) {
    var jwtToken = _ref4.jwtToken;
    return client({
      url: "/institutional-bursatil",
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    put: put,
    deleteInstitutional: deleteInstitutional
  };
}
module.exports = institutional;