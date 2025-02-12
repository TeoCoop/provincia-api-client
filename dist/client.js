"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = client;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function createClient(baseURL) {
  return _axios["default"].create({
    baseURL: "".concat(baseURL),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
function bursatilEndpoints(baseURL) {
  var client = createClient(baseURL);
  return {
    blog: require("./enpoints/bursatil/blog.js")({
      client: client
    })
  };
}
function authEndpoint(baseURL) {
  var client = createClient(baseURL);
  return require("./enpoints/auth/auth.js")({
    client: client
  });
}
function client(options) {
  var env = options.env;
  var baseURL = env === "dev" ? "http://localhost:1337/api" : env === "sandbox" ? "https://provincia.teocoop.site/api" : "https://provincia.teocoop.site/api";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL)
  };
}