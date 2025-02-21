"use strict";

function blog(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var jwtToken = _ref2.jwtToken,
      blogId = _ref2.blogId;
    return client({
      url: "/blog-bursatils/".concat(blogId),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function getAll(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/blog-bursatils",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll
  };
}
module.exports = blog;