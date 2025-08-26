"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function paletteAndColors(_ref) {
  var client = _ref.client;
  function getByIdPalette(_ref2) {
    var paletteId = _ref2.paletteId;
    return client({
      url: "/api/palette-bursatils/".concat(paletteId),
      method: "get"
    });
  }
  function getAllPalettes() {
    return client({
      url: "/api/palette-bursatils",
      method: "get"
    });
  }
  function getAllPanel(_ref3) {
    var jwtToken = _ref3.jwtToken;
    return client({
      url: "/api/palette-bursatils",
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updatePalette(_ref4) {
    var jwtToken = _ref4.jwtToken,
      paletteId = _ref4.paletteId,
      data = _ref4.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/palette-bursatils/".concat(paletteId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function createPalette(_ref5) {
    var jwtToken = _ref5.jwtToken,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/palette-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deletePalette(_ref6) {
    var jwtToken = _ref6.jwtToken,
      paletteId = _ref6.paletteId;
    return client({
      url: "/api/palette-bursatils/".concat(paletteId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function getByIdColor(_ref7) {
    var colorId = _ref7.colorId;
    return client({
      url: "/api/colors-bursatils/".concat(colorId),
      method: "get"
    });
  }
  function getAllColor() {
    return client({
      url: "/api/colors-bursatils",
      method: "get"
    });
  }
  function updateColor(_ref8) {
    var jwtToken = _ref8.jwtToken,
      colorId = _ref8.colorId,
      data = _ref8.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/colors-bursatils/".concat(colorId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function createColor(_ref9) {
    var jwtToken = _ref9.jwtToken,
      data = _ref9.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/colors-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteColor(_ref0) {
    var jwtToken = _ref0.jwtToken,
      colorId = _ref0.colorId;
    return client({
      url: "/api/colors-bursatils/".concat(colorId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAllColor: getAllColor,
    getByIdColor: getByIdColor,
    deleteColor: deleteColor,
    createColor: createColor,
    updateColor: updateColor,
    getAllPalettes: getAllPalettes,
    updatePalette: updatePalette,
    deletePalette: deletePalette,
    getByIdPalette: getByIdPalette,
    createPalette: createPalette,
    getAllPanel: getAllPanel
  };
}
module.exports = paletteAndColors;