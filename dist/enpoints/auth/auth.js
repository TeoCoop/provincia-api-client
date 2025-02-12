"use strict";

function auth(_ref) {
  var client = _ref.client;
  function auth(_ref2) {
    var user = _ref2.user;
    return client({
      url: "/auth/local",
      method: "post",
      data: {
        identifier: user.identifier,
        password: user.password
      }
    });
  }
  return {
    auth: auth
  };
}
module.exports = auth;