"use strict";

function account(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var accountId = _ref2.accountId;
    return client({
      url: "/account-opening-bursatils/".concat(accountId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/account-opening-bursatils",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function createAccount(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/account-opening-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        name: data.name,
        uploads: data.uploads,
        "delete": data["delete"]
      }
    });
  }
  function updateAccount(_ref4) {
    var jwtToken = _ref4.jwtToken,
      accountId = _ref4.accountId,
      data = _ref4.data;
    return client({
      url: "/account-opening-bursatils/".concat(accountId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        name: data.name,
        uploads: data.uploads,
        "delete": data["delete"]
      }
    });
  }
  function deleteAccount(_ref5) {
    var jwtToken = _ref5.jwtToken,
      accountId = _ref5.accountId;
    return client({
      url: "/account-opening-bursatils/".concat(accountId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createAccount: createAccount,
    updateAccount: updateAccount,
    deleteAccount: deleteAccount
  };
}
module.exports = account;