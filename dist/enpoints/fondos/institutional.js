"use strict";

function institutional(_ref) {
  var client = _ref.client;
  function getAll() {
    return client({
      url: "/institutional-fondos",
      method: "get"
    });
  }
  function updateInstitutional(_ref2) {
    var jwtToken = _ref2.jwtToken;
    return client({
      url: "/institutional-fondos",
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
          directory: data.directory,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteInstitutional(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/institutional-fondos",
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