"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function areasBursatil(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var areaId = _ref2.areaId;
    return client({
      url: "/api/area-team-bursatils/".concat(areaId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/api/area-team-bursatils",
      method: "get"
    });
  }
  function updateArea(_ref3) {
    var jwtToken = _ref3.jwtToken,
      areaId = _ref3.areaId,
      data = _ref3.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/area-team-bursatils/".concat(areaId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function createArea(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/area-team-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteArea(_ref5) {
    var jwtToken = _ref5.jwtToken,
      areaId = _ref5.areaId;
    return client({
      url: "/api/area-team-bursatils/".concat(areaId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateArea: updateArea,
    deleteArea: deleteArea,
    getById: getById,
    createArea: createArea
  };
}
module.exports = areasBursatil;