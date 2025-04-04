"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function topicBlog(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var topicId = _ref2.topicId;
    return client({
      url: "/api/topic-blog-bursatils/".concat(topicId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/api/topic-blog-bursatils",
      method: "get"
    });
  }
  function updateTopic(_ref3) {
    var jwtToken = _ref3.jwtToken,
      topicId = _ref3.topicId,
      data = _ref3.data;
    return client({
      url: "/api/topic-blog-bursatils/".concat(topicId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: _objectSpread({}, data)
    });
  }
  function createTopic(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    return client({
      url: "/api/topic-blog-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: _objectSpread({}, data)
    });
  }
  function deleteTopic(_ref5) {
    var jwtToken = _ref5.jwtToken,
      topicId = _ref5.topicId;
    return client({
      url: "/api/topic-blog-bursatils/".concat(topicId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateTopic: updateTopic,
    deleteTopic: deleteTopic,
    getById: getById,
    createTopic: createTopic
  };
}
module.exports = topicBlog;