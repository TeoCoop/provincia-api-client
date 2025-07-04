"use strict";

function questionTest(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var questionId = _ref2.questionId;
    return client({
      url: "/api/questions-fondos/".concat(questionId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/api/questions-fondos",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updatedQuestion(_ref3) {
    var jwtToken = _ref3.jwtToken,
      questionId = _ref3.questionId,
      data = _ref3.data;
    return client({
      url: "/api/questions-fondos/".concat(questionId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
          "delete": data["delete"]
        }
      }
    });
  }
  function createQuestion(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    return client({
      url: "/api/questions-fondos",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteCuestion(_ref5) {
    var jwtToken = _ref5.jwtToken,
      questionId = _ref5.questionId;
    return client({
      url: "/api/questions-fondos/".concat(questionId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updatedQuestion: updatedQuestion,
    deleteCuestion: deleteCuestion,
    getById: getById,
    createQuestion: createQuestion
  };
}
module.exports = questionTest;