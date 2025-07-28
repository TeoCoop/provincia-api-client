"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function blogMedia(_ref) {
  var client = _ref.client;
  function getAll(_ref2) {
    var jwtToken = _ref2.jwtToken,
      _ref2$page = _ref2.page,
      page = _ref2$page === void 0 ? 1 : _ref2$page,
      _ref2$pageSize = _ref2.pageSize,
      pageSize = _ref2$pageSize === void 0 ? 20 : _ref2$pageSize;
    var params = new URLSearchParams({
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize)
    });
    return client({
      url: "/api/blog-medias?".concat(params.toString()),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function getById(_ref3) {
    var jwtToken = _ref3.jwtToken,
      fileId = _ref3.fileId;
    return client({
      url: "/api/blog-medias/".concat(fileId),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updateFile(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data,
      fileId = _ref4.fileId;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/blog-medias/".concat(fileId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        formattedData: formattedData
      }
    });
  }
  function deleteFile(_ref5) {
    var jwtToken = _ref5.jwtToken,
      fileId = _ref5.fileId;
    return client({
      url: "/api/blog-medias/".concat(fileId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function createFile(_ref6) {
    var jwtToken = _ref6.jwtToken,
      data = _ref6.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/blog-medias",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  return {
    getAll: getAll,
    updateFile: updateFile,
    deleteBlogMedia: deleteBlogMedia,
    getById: getById,
    deleteFile: deleteFile,
    createFile: createFile
  };
}
module.exports = blogMedia;