import axios from "axios";
/**
 * @param {string} baseURL
 */
function createClient(baseURL) {
  return axios.create({
    baseURL: `${baseURL}`,
    headers: { "Content-Type": "application/json" },
  });
}

function bursatilEndpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    blog: require("./enpoints/bursatil/blog.js")({ client }),
    institutional: require("./enpoints/bursatil/institutional.js")({ client }),
    product: require("./enpoints/bursatil/productBursatil.js")({ client }),
    accountOppening: require("./enpoints/bursatil/accountOpening.js")({
      client,
    }),
    faqs: require("./enpoints/bursatil/faqs.js")({
      client,
    }),
    global: require("./enpoints/bursatil/global.js")({
      client,
    }),
    carterasEficientes: require("./enpoints/bursatil/carterasEficientes.js")({
      client,
    }),
    videoTutorial: require("./enpoints/bursatil/videoSection.js")({
      client,
    }),
    categoriesVideos: require("./enpoints/bursatil/categoriesVideo.js")({
      client,
    }),
    categoriesBlog: require("./enpoints/bursatil/categoriesBlog.js")({
      client,
    }),
    areaTeam: require("./enpoints/bursatil/areaTeam.js")({
      client,
    }),
    teamMember: require("./enpoints/bursatil/teamMembers.js")({
      client,
    }),
    aliados: require("./enpoints/bursatil/aliados.js")({
      client,
    }),
    topicBlog: require("./enpoints/bursatil/topicBlog.js")({
      client,
    }),
    destacadosHome: require("./enpoints/bursatil/destacadosHome.js")({
      client,
    }),
    foundsForBursatil:
      require("./enpoints/bursatil/queryFoundsFromBursatil.js")({
        client,
      }),
    paletteAndColors: require("./enpoints/bursatil/paletteAndColors.js")({
      client,
    }),
    seccionAliados: require("./enpoints/bursatil/aliadosSeccion.js")({
      client,
    }),
    homeBursatil: require("./enpoints/bursatil/homeBursatil.js")({
      client,
    }),
    contactNewsleter: require("./enpoints/bursatil/contactNewsleter.js")({
      client,
    }),
    contactAsociado: require("./enpoints/bursatil/contactAsesor.js")({
      client,
    }),
  };
}

function fondosEndpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    blog: require("./enpoints/fondos/blog.js")({ client }),
    institutional: require("./enpoints/fondos/institutional.js")({ client }),
    category: require("./enpoints/fondos/foundCategory.js")({ client }),
    faqs: require("./enpoints/fondos/faqs.js")({
      client,
    }),
    founds: require("./enpoints/fondos/ourFounds.js")({
      client,
    }),
    global: require("./enpoints/fondos/global.js")({
      client,
    }),
    test: require("./enpoints/bursatil/testInversor.js")({ client }),
    questionTest: require("./enpoints/bursatil/questionTest.js")({ client }),
    inversorProfile: require("./enpoints/bursatil/inversorProfile.js")({
      client,
    }),
  };
}
function generalEnpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    upload: require("./enpoints/general/upload.js")({ client }),
    //acá también vamos a poner el update file
  };
}
function authEndpoint(baseURL) {
  const client = createClient(baseURL);
  return require("./enpoints/auth/auth.js")({ client });
}

export function client(options) {
  const { env } = options;
  const baseURL =
    env === "development"
      ? "http://localhost:1337"
      : env === "sandbox"
      ? "https://provincia-sandbox-api.teocoop.site/"
      : "https://provincia-prod-api.teocoop.site/";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL),
  };
}
