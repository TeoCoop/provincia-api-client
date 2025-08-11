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
    var user = _ref3.user,
      access_token = _ref3.access_token;
    return client({
      url: "/api/login/bursatil/request-code",
      method: "post",
      data: {
        email: user.email,
        password: user.password
      },
      headers: {
        Authorization: "Bearer ".concat(access_token)
      }
    });
  }
  function verifyTotp(_ref4) {
    var user = _ref4.user,
      access_token = _ref4.access_token;
    // 1. Renamed for clarity
    return client({
      url: "/api/login/bursatil/verify-code",
      // 2. Added /api prefix
      method: "post",
      data: {
        email: user.email,
        code: user.token // 3. Changed payload key from 'token' to 'code'
      },
      headers: {
        Authorization: "Bearer ".concat(access_token)
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