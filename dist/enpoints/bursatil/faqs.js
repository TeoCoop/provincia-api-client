"use strict";

function faq(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var faqId = _ref2.faqId;
    return client({
      url: "/faq-bursatils/".concat(faqId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/faq-bursatils",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function createFaq(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/faq-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        question: data.question,
        answer: data.answer,
        "delete": data["delete"]
      }
    });
  }
  function updateFaq(_ref4) {
    var jwtToken = _ref4.jwtToken,
      faqId = _ref4.faqId,
      data = _ref4.data;
    return client({
      url: "/faq-bursatils/".concat(faqId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          question: data.question,
          answer: data.answer,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteFaq(_ref5) {
    var jwtToken = _ref5.jwtToken,
      faqId = _ref5.faqId;
    return client({
      url: "/faq-bursatils/".concat(faqId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createFaq: createFaq,
    updateFaq: updateFaq,
    deleteFaq: deleteFaq
  };
}
module.exports = faq;