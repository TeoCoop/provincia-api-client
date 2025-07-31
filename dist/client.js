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
    instrumentosSelected: require("./enpoints/bursatil/instrumentos.js")({
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
    }),
    test: require("./enpoints/bursatil/testInversor.js")({
      client: client
    }),
    questionTest: require("./enpoints/bursatil/questionTest.js")({
      client: client
    }),
    inversorProfile: require("./enpoints/bursatil/inversorProfile.js")({
      client: client
    }),
    simulador: require("./enpoints/bursatil/simulador.js")({
      client: client
    }),
    libreria: require("./enpoints/bursatil/libreria.js")({
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
    faqs: require("./enpoints/fondos/faqs.js")({
      client: client
    }),
    founds: require("./enpoints/fondos/ourFounds.js")({
      client: client
    }),
    areaTeam: require("./enpoints/fondos/areaTeam.js")({
      client: client
    }),
    categoriesBlog: require("./enpoints/fondos/categoriesBlog.js")({
      client: client
    }),
    categoriesVideos: require("./enpoints/fondos/categoriesVideo.js")({
      client: client
    }),
    homeFondos: require("./enpoints/fondos/homeFondos.js")({
      client: client
    }),
    paletteAndColors: require("./enpoints/fondos/paletteAndColors.js")({
      client: client
    }),
    questionTest: require("./enpoints/fondos/questionTest.js")({
      client: client
    }),
    teamMember: require("./enpoints/fondos/teamMembers.js")({
      client: client
    }),
    inversorProfile: require("./enpoints/fondos/inversorProfile.js")({
      client: client
    }),
    test: require("./enpoints/fondos/testInversor.js")({
      client: client
    }),
    topicBlog: require("./enpoints/fondos/topicBlog.js")({
      client: client
    }),
    videoTutorial: require("./enpoints/fondos/videoSection.js")({
      client: client
    }),
    nuestroEquipo: require("./enpoints/fondos/nuestroEquipo.js")({
      client: client
    }),
    tiposActivos: require("./enpoints/fondos/typeActiveFound.js")({
      client: client
    }),
    caracteristicasFound: require("./enpoints/fondos/caracteristicasFound.js")({
      client: client
    }),
    simulador: require("./enpoints/fondos/simulador.js")({
      client: client
    }),
    informacionParaInversor: require("./enpoints/fondos/informacionParaInversor.js")({
      client: client
    }),
    informacionParaInversorFile: require("./enpoints/fondos/informacionParaInversorFile.js")({
      client: client
    }),
    cuotaParte: require("./enpoints/fondos/cuotaParte.js")({
      client: client
    }),
    libreria: require("./enpoints/fondos/libreria.js")({
      client: client
    }),
    destacadoPopUp: require("./enpoints/fondos/destacado.js")({
      client: client
    })
  };
}
function generalEnpoints(baseURL) {
  var client = createClient(baseURL);
  return {
    upload: require("./enpoints/general/upload.js")({
      client: client
    }),
    blogMedia: require("./enpoints/general/blogMedia.js")({
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
  var baseURL = env === "prod" ? "https://provincia-prod-api.teocoop.site/" : env === "sandbox" ? "https://provincia-sandbox-api.teocoop.site/" : "http://localhost:1337/";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL)
  };
}