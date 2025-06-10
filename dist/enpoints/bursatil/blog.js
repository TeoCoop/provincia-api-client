"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function blog(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var blogId = _ref2.blogId;
    return client({
      url: "/api/blog-bursatils/".concat(blogId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/api/blog-bursatils",
      method: "get"
    });
  }
  function getFilters(_ref3) {
    var year = _ref3.year,
      topicDocumentId = _ref3.topicDocumentId,
      categoryDocumentId = _ref3.categoryDocumentId,
      search = _ref3.search;
    var query = "\n      query BlogBursatil(\n        $year: DateTime\n        $topicDocumentId: ID\n        $categoryDocumentId: ID\n        $search: String\n      ) {\n        blogBursatils(\n          filters: {\n            and: [\n            {\n              isDelete: {\n                eq: false\n              }\n            }\n              {\n                createdAt: {\n                  gte: $year\n                }\n              }\n              {\n                topic_blog_bursatils: {\n                  documentId: {\n                    eq: $topicDocumentId\n                  }\n                }\n              }\n              {\n                category_blog_bursatil: {\n                  documentId: {\n                    eq: $categoryDocumentId\n                  }\n                }\n              }\n              {\n                or: [\n                  { title: { containsi: $search } }\n                  { subtitle: { containsi: $search } }\n                  { content: { containsi: $search } }\n                ]\n              }\n            ]\n          }\n        ) {\n          createdAt\n          title\n          subtitle\n          content\n          author\n          topic_blog_bursatils {\n            topic\n          }\n          category_blog_bursatil {\n            name\n          }\n        }\n      }\n    ";
    var variables = {
      year: year,
      topicDocumentId: topicDocumentId,
      categoryDocumentId: categoryDocumentId,
      search: search
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
  function createBlog(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/blog-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function updateBlog(_ref5) {
    var jwtToken = _ref5.jwtToken,
      blogId = _ref5.blogId,
      data = _ref5.data;
    var formattedData = {
      data: _objectSpread({}, data)
    };
    return client({
      url: "/api/blog-bursatils/".concat(blogId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: formattedData
    });
  }
  function deleteBlog(_ref6) {
    var jwtToken = _ref6.jwtToken,
      blogId = _ref6.blogId;
    return client({
      url: "/api/blog-bursatils/".concat(blogId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createBlog: createBlog,
    updateBlog: updateBlog,
    deleteBlog: deleteBlog,
    getFilters: getFilters
  };
}
module.exports = blog;