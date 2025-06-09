"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function contactNewsleter(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var jwtToken = _ref2.jwtToken,
      contactId = _ref2.contactId;
    return client({
      url: "/api/contact-client-bursatils/".concat(contactId),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function getAll(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/contact-client-bursatils",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function createContact(_ref4) {
    var data = _ref4.data;
    var formattedData = {
      data: _objectSpread(_objectSpread({}, data), {}, {
        isDelete: false,
        isAddCanal: false
      })
    };
    return client({
      url: "/api/contact-client-bursatils",
      method: "post",
      data: formattedData
    });
  }
  function updateContact(_ref5) {
    var jwtToken = _ref5.jwtToken,
      contactId = _ref5.contactId,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/contact-client-bursatils/".concat(contactId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteContact(_ref6) {
    var jwtToken = _ref6.jwtToken,
      contactId = _ref6.contactId;
    return client({
      url: "/api/contact-client-bursatils/".concat(contactId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createContact: createContact,
    updateContact: updateContact,
    deleteContact: deleteContact
  };
}
module.exports = contactNewsleter;