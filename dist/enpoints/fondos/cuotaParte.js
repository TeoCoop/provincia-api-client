"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function cuotaParteFound(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var cuotaParteId = _ref2.cuotaParteId;
    return client({
      url: "/api/cuota-partes/".concat(cuotaParteId),
      method: "get"
    });
  }
  function getAll(_ref3) {
    var numero_fondo = _ref3.numero_fondo,
      clase_fondo = _ref3.clase_fondo,
      _ref3$page = _ref3.page,
      page = _ref3$page === void 0 ? 1 : _ref3$page,
      _ref3$pageSize = _ref3.pageSize,
      pageSize = _ref3$pageSize === void 0 ? 20 : _ref3$pageSize;
    var params = new URLSearchParams({
      "filters[numero_fondo][$eq]": String(numero_fondo),
      "filters[clase_fondo][$eq]": clase_fondo,
      page: String(page),
      pageSize: String(pageSize)
    });
    return client({
      url: "/api/cuota-partes?".concat(params.toString()),
      method: "get"
    });
  }
  function getByRange(_ref4) {
    var numero_fondo = _ref4.numero_fondo,
      clase_fondo = _ref4.clase_fondo,
      fecha_inicio = _ref4.fecha_inicio,
      fecha_fin = _ref4.fecha_fin,
      _ref4$page = _ref4.page,
      page = _ref4$page === void 0 ? 1 : _ref4$page,
      _ref4$pageSize = _ref4.pageSize,
      pageSize = _ref4$pageSize === void 0 ? 20 : _ref4$pageSize;
    var params = new URLSearchParams({
      numero_fondo: String(numero_fondo),
      clase_fondo: clase_fondo,
      fecha_inicio: fecha_inicio,
      fecha_fin: fecha_fin,
      page: String(page),
      pageSize: String(pageSize)
    });
    return client({
      url: "/api/cuota-partes?".concat(params.toString()),
      method: "get"
    });
  }
  function updateCuotaParte(_ref5) {
    var jwtToken = _ref5.jwtToken,
      cuotaParteId = _ref5.cuotaParteId,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/cuota-partes/".concat(cuotaParteId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function createCuotaParte(_ref6) {
    var jwtToken = _ref6.jwtToken,
      data = _ref6.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/cuota-partes",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteCuotaParte(_ref7) {
    var jwtToken = _ref7.jwtToken,
      cuotaParteId = _ref7.cuotaParteId;
    return client({
      url: "/api/cuota-partes/".concat(cuotaParteId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateCuotaParte: updateCuotaParte,
    deleteCuotaParte: deleteCuotaParte,
    getById: getById,
    createCuotaParte: createCuotaParte,
    getByRange: getByRange
  };
}
module.exports = cuotaParteFound;