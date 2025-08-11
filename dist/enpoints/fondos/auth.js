"use strict";

function auth(_ref) {
  var client = _ref.client;
  function auth(_ref2) {
    var user = _ref2.user;
    return client({
      url: "/api/auth/local",
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
      url: "/api/login/fondos/request-code",
      method: "post",
      data: {
        email: user.email,
        password: user.password
      }
    });
  }
  function verifyTotp(_ref4) {
    var user = _ref4.user;
    // 1. Renamed for clarity
    return client({
      url: "/api/login/fondos/verify-code",
      // 2. Added /api prefix
      method: "post",
      data: {
        email: user.email,
        code: user.token // 3. Changed payload key from 'token' to 'code'
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