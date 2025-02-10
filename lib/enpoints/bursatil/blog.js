"use strict";

function blog(_ref) {
  var client = _ref.client;
  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
      blogId = _ref2.blogId;
    return client({
      url: "/blog-resource-bursatils/".concat(blogId),
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function getAll(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/blog-resource-bursatils",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    get: get,
    getAll: getAll
  };
}
module.exports = blog;