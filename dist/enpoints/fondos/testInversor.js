"use strict";

function testInversor(_ref) {
  var client = _ref.client;
  function getAll() {
    return client({
      url: "/api/test-inversor-fondo",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateTest(_ref2) {
    var jwtToken = _ref2.jwtToken,
      data = _ref2.data;
    return client({
      url: "/api/test-inversor-fondo",
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          questions: data.questions,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteTest(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/test-inversor-fondo",
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateTest: updateTest,
    deleteTest: deleteTest
  };
}
module.exports = testInversor;