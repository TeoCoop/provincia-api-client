"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function founds(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var foundId = _ref2.foundId;
    return client({
      url: "/api/our-founds/".concat(foundId),
      method: "get"
    });
  }
  function getByDocumentId(_ref3) {
    var foundDocumentId = _ref3.foundDocumentId;
    return client({
      url: "/api/our-found/document/".concat(foundDocumentId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/api/our-founds",
      method: "get"
    });
  }
  function getOnlyNameAndNumber() {
    var query = "\n    query {\n      ourFounds {\n        name\n        numero_fondo\n      }\n    }\n  ";
    return axios({
      url: "/graphql",
      method: "post",
      data: {
        query: query
      }
    });
  }
  function getFilters() {
    var query = "\n        query OurFounds(\n        $caracteristicaDocumentId: ID\n        $tipoActivoDocumentId: ID\n        $valueInversorId: ID\n      ) {\n        ourFounds(\n          filters: {\n            and: [\n              {\n                caracteristicas_fondos: {\n                  documentId: { eq: $caracteristicaDocumentId }\n                }\n              }\n              {\n                tipos_activos_fondos: {\n                  documentId: { eq: $tipoActivoDocumentId }\n                }\n              }\n              {\n                inversor_profile_fondos:   {\n                  documentId: { eq: $valueInversorId }\n                }\n              }\n            ]\n          }\n        ) {\n        name\n        description\n        numero_fondo\n        moneda\n        informationAt\n        patrimonio\n        link\n        documentId\n        factSheet {\n          url\n        }\n      caracteristicas_fondos {\n        value\n        documentId\n      }\n      tipos_activos_fondos {\n        value\n        documentId\n      }\n      inversor_profile_fondos {\n        title\n        description\n        documentId\n        shortDescription\n      }\n        }\n      }\n";
    var variables = {
      caracteristicaDocumentId: caracteristicaDocumentId,
      tipoActivoDocumentId: tipoActivoDocumentId,
      valueInversorId: valueInversorId
    };
    return client({
      url: "/graphql",
      method: "post",
      data: {
        query: query,
        variables: variables
      }
    });
  }
  function createFound(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/our-founds",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function updateFound(_ref5) {
    var jwtToken = _ref5.jwtToken,
      foundId = _ref5.foundId,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/our-founds/".concat(foundId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteFound(_ref6) {
    var jwtToken = _ref6.jwtToken,
      foundId = _ref6.foundId;
    return client({
      url: "/api/our-founds/".concat(foundId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createFound: createFound,
    updateFound: updateFound,
    deleteFound: deleteFound,
    getFilters: getFilters,
    getByDocumentId: getByDocumentId,
    getOnlyNameAndNumber: getOnlyNameAndNumber
  };
}
module.exports = founds;
// curl --request POST \
//     --header 'content-type: application/json' \
//     --url http://localhost:1337/graphql \
//     --data '{"query":"query ExampleQuery {\n  cuotaPartes(\n    filters: {\n      fecha: {\n        gte: \"2025-03-18\", \n        lte: \"2025-03-19\"\n      },\n      fondo: { numero_fondo: { eq: 9 } } }\n  ) {\n    documentId\n    valor\n    fecha\n    fondo {\n      numero_fondo\n      name\n    }\n  }\n}","variables":{}}'