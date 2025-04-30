"use strict";

function institutional(_ref) {
  var client = _ref.client;
  function getAll() {
    return client({
      url: "/api/institutional-bursatil",
      method: "get"
    });
  }
  function updateInstitutional(_ref2) {
    var jwtToken = _ref2.jwtToken,
      data = _ref2.data;
    return client({
      url: "/api/institutional-bursatil",
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: data
      }
    });
  }
  function deleteInstitutional(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/institutional-bursatil",
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateInstitutional: updateInstitutional,
    deleteInstitutional: deleteInstitutional
  };
}
module.exports = institutional;