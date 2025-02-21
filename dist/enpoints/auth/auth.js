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
  function login(_ref3) {
    var user = _ref3.user;
    return client({
      url: "/auth/login",
      method: "post",
      data: {
        email: user.email,
        password: user.password
      }
    });
  }
  function verifyTotp(_ref4) {
    var user = _ref4.user;
    return client({
      url: "/auth/verify-totp",
      method: "post",
      data: {
        email: user.email,
        token: user.token
      }
    });
  }
  return {
    auth: auth,
    login: login,
    verifyTotp: verifyTotp
  };
}
module.exports = auth;