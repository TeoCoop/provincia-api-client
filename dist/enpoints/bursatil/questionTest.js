"use strict";

function questionTest(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var questionId = _ref2.questionId;
    return client({
      url: "/api/questions/".concat(questionId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/api/questions",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAllPanel(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/questions",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updatedQuestion(_ref4) {
    var jwtToken = _ref4.jwtToken,
      questionId = _ref4.questionId,
      data = _ref4.data;
    return client({
      url: "/api/questions/".concat(questionId),
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
  function createQuestion(_ref5) {
    var jwtToken = _ref5.jwtToken,
      data = _ref5.data;
    return client({
      url: "/api/questions",
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
  function deleteCuestion(_ref6) {
    var jwtToken = _ref6.jwtToken,
      questionId = _ref6.questionId;
    return client({
      url: "/api/questions/".concat(questionId),
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