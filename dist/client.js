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
      "Content-Type": "application/json"
    }
  });
}
function bursatilEndpoints(baseURL) {
  var client = createClient(baseURL);
  return {
    blog: require("./enpoints/bursatil/blog.js")({
      client: client
    }),
    institutional: require("./enpoints/bursatil/institutional.js")({
      client: client
    }),
    product: require("./enpoints/bursatil/productBursatil.js")({
      client: client
    }),
    accountOppening: require("./enpoints/bursatil/accountOpening.js")({
      client: client
    }),
    faqs: require("./enpoints/bursatil/faqs.js")({
      client: client
    }),
    global: require("./enpoints/bursatil/global.js")({
      client: client
    }),
    carterasEficientes: require("./enpoints/bursatil/carterasEficientes.js")({
      client: client
    }),
    videoTutorial: require("./enpoints/bursatil/videoSecction.js")({
      client: client
    }),
    categoriesVideos: require("./enpoints/bursatil/categoriesVideo.js")({
      client: client
    })
  };
}
function fondosEndpoints(baseURL) {
  var client = createClient(baseURL);
  return {
    blog: require("./enpoints/fondos/blog.js")({
      client: client
    }),
    institutional: require("./enpoints/fondos/institutional.js")({
      client: client
    }),
    category: require("./enpoints/fondos/foundCategory.js")({
      client: client
    }),
    faqs: require("./enpoints/fondos/faqs.js")({
      client: client
    }),
    founds: require("./enpoints/fondos/ourFounds.js")({
      client: client
    }),
    global: require("./enpoints/fondos/global.js")({
      client: client
    })
  };
}
function generalEnpoints(baseURL) {
  var client = createClient(baseURL);
  return {
    test: require("./enpoints/general/testInversor.js")({
      client: client
    }),
    questionTest: require("./enpoints/general/questionTest.js")({
      client: client
    })
    //acá también vamos a poner el update file
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
  var baseURL = env === "development" ? "http://localhost:1337/api" : env === "sandbox" ? "https://provincia.teocoop.site/api" : "https://provincia.teocoop.site/api";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL)
  };
}