"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function form(_ref) {
  var client = _ref.client;
  /**
   * @param {{
   *   jwtToken: string,
   *   page?: number,
   *   pageSize?: number,
   *   search?: string,
   *   motivoDocumentId?: string,
   *   dateFrom?: string,
   *   dateTo?: string,
   * }} params
   */
  function getAll(_ref2) {
    var jwtToken = _ref2.jwtToken,
      _ref2$page = _ref2.page,
      page = _ref2$page === void 0 ? 1 : _ref2$page,
      _ref2$pageSize = _ref2.pageSize,
      pageSize = _ref2$pageSize === void 0 ? 25 : _ref2$pageSize,
      _ref2$search = _ref2.search,
      search = _ref2$search === void 0 ? undefined : _ref2$search,
      _ref2$motivoDocumentI = _ref2.motivoDocumentId,
      motivoDocumentId = _ref2$motivoDocumentI === void 0 ? undefined : _ref2$motivoDocumentI,
      _ref2$dateFrom = _ref2.dateFrom,
      dateFrom = _ref2$dateFrom === void 0 ? undefined : _ref2$dateFrom,
      _ref2$dateTo = _ref2.dateTo,
      dateTo = _ref2$dateTo === void 0 ? undefined : _ref2$dateTo;
    var params = new URLSearchParams();
    params.set("pagination[page]", page);
    params.set("pagination[pageSize]", pageSize);
    if (search) {
      params.set("filters[$or][0][name][$containsi]", search);
      params.set("filters[$or][1][email][$containsi]", search);
      params.set("filters[$or][2][message][$containsi]", search);
      params.set("filters[$or][3][cuit][$containsi]", search);
    }
    if (motivoDocumentId) {
      params.set("filters[motivo_consulta_fondo][documentId][$eq]", motivoDocumentId);
    }
    if (dateFrom) {
      params.set("filters[createdAt][$gte]", dateFrom);
    }
    if (dateTo) {
      params.set("filters[createdAt][$lte]", dateTo);
    }
    return client({
      url: "/api/form-fondos?".concat(params.toString()),
      method: "get",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  function updateForm(_ref3) {
    var jwtToken = _ref3.jwtToken,
      documentId = _ref3.documentId,
      data = _ref3.data;
    return client({
      url: "/api/form-fondos/".concat(documentId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: data
      }
    });
  }
  function deleteForm(_ref4) {
    var jwtToken = _ref4.jwtToken,
      documentId = _ref4.documentId,
      data = _ref4.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/form-fondos/".concat(documentId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function createForm(_ref5) {
    var jwtToken = _ref5.jwtToken,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/form-fondos",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  return {
    getAll: getAll,
    updateForm: updateForm,
    createForm: createForm,
    deleteForm: deleteForm
  };
}
module.exports = form;