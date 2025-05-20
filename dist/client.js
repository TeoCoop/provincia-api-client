"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = client;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @param {string} baseURL
 */
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
    videoTutorial: require("./enpoints/bursatil/videoSection.js")({
      client: client
    }),
    categoriesVideos: require("./enpoints/bursatil/categoriesVideo.js")({
      client: client
    }),
    categoriesBlog: require("./enpoints/bursatil/categoriesBlog.js")({
      client: client
    }),
    areaTeam: require("./enpoints/bursatil/areaTeam.js")({
      client: client
    }),
    teamMember: require("./enpoints/bursatil/teamMembers.js")({
      client: client
    }),
    aliados: require("./enpoints/bursatil/aliados.js")({
      client: client
    }),
    topicBlog: require("./enpoints/bursatil/topicBlog.js")({
      client: client
    }),
    destacadosHome: require("./enpoints/bursatil/destacadosHome.js")({
      client: client
    }),
    foundsForBursatil: require("./enpoints/bursatil/queryFoundsFromBursatil.js")({
      client: client
    }),
    paletteAndColors: require("./enpoints/bursatil/paletteAndColors.js")({
      client: client
    }),
    seccionAliados: require("./enpoints/bursatil/aliadosSeccion.js")({
      client: client
    }),
    homeBursatil: require("./enpoints/bursatil/homeBursatil.js")({
      client: client
    }),
    contactNewsleter: require("./enpoints/bursatil/contactNewsleter.js")({
      client: client
    }),
    contactAsociado: require("./enpoints/bursatil/contactAsesor.js")({
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
    }),
    upload: require("./enpoints/general/upload.js")({
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
  var baseURL = env === "development" ? "http://localhost:1337" : env === "sandbox" ? "https://provincia-sandbox-api.teocoop.site/" : "https://provincia-sandbox-api.teocoop.site/";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL)
  };
}