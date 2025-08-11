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
    faqs: require("./enpoints/bursatil/faqs.js")({
      client,
    }),
    global: require("./enpoints/bursatil/global.js")({
      client,
    }),
    carterasEficientes: require("./enpoints/bursatil/carterasEficientes.js")({
      client,
    }),
    instrumentosSelected: require("./enpoints/bursatil/instrumentos.js")({
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
    homeBursatil: require("./enpoints/bursatil/homeBursatil.js")({
      client,
    }),
    contactNewsleter: require("./enpoints/bursatil/contactNewsleter.js")({
      client,
    }),
    contactAsociado: require("./enpoints/bursatil/contactAsesor.js")({
      client,
    }),
    test: require("./enpoints/bursatil/testInversor.js")({ client }),
    questionTest: require("./enpoints/bursatil/questionTest.js")({ client }),
    inversorProfile: require("./enpoints/bursatil/inversorProfile.js")({
      client,
    }),
    simulador: require("./enpoints/bursatil/simulador.js")({
      client,
    }),
    libreria: require("./enpoints/bursatil/libreria.js")({
      client,
    }),
    authBursatil: require("./enpoints/bursatil/auth.js")({ client }),
  };
}

function fondosEndpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    blog: require("./enpoints/fondos/blog.js")({ client }),
    institutional: require("./enpoints/fondos/institutional.js")({ client }),
    faqs: require("./enpoints/fondos/faqs.js")({
      client,
    }),
    founds: require("./enpoints/fondos/ourFounds.js")({
      client,
    }),
    areaTeam: require("./enpoints/fondos/areaTeam.js")({
      client,
    }),
    categoriesBlog: require("./enpoints/fondos/categoriesBlog.js")({
      client,
    }),
    categoriesVideos: require("./enpoints/fondos/categoriesVideo.js")({
      client,
    }),
    homeFondos: require("./enpoints/fondos/homeFondos.js")({
      client,
    }),
    paletteAndColors: require("./enpoints/fondos/paletteAndColors.js")({
      client,
    }),
    questionTest: require("./enpoints/fondos/questionTest.js")({ client }),
    teamMember: require("./enpoints/fondos/teamMembers.js")({
      client,
    }),
    inversorProfile: require("./enpoints/fondos/inversorProfile.js")({
      client,
    }),
    test: require("./enpoints/fondos/testInversor.js")({ client }),
    topicBlog: require("./enpoints/fondos/topicBlog.js")({
      client,
    }),
    videoTutorial: require("./enpoints/fondos/videoSection.js")({
      client,
    }),
    nuestroEquipo: require("./enpoints/fondos/nuestroEquipo.js")({
      client,
    }),
    tiposActivos: require("./enpoints/fondos/typeActiveFound.js")({
      client,
    }),
    caracteristicasFound: require("./enpoints/fondos/caracteristicasFound.js")({
      client,
    }),
    simulador: require("./enpoints/fondos/simulador.js")({
      client,
    }),
    informacionParaInversor:
      require("./enpoints/fondos/informacionParaInversor.js")({
        client,
      }),
    informacionParaInversorFile:
      require("./enpoints/fondos/informacionParaInversorFile.js")({
        client,
      }),
    cuotaParte: require("./enpoints/fondos/cuotaParte.js")({
      client,
    }),
    libreria: require("./enpoints/fondos/libreria.js")({
      client,
    }),
    destacadoPopUp: require("./enpoints/fondos/destacados.js")({
      client,
    }),
    authFondos: require("./enpoints/fondos/auth.js")({ client }),
  };
}
function generalEnpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    upload: require("./enpoints/general/upload.js")({ client }),
    blogMedia: require("./enpoints/general/blogMedia.js")({ client }),
    //acá también vamos a poner el update file
  };
}

export function client(options) {
  const { env } = options;
  const baseURL =
    env === "prod"
      ? "https://provincia-prod-api.teocoop.site/"
      : env === "sandbox"
      ? "https://provincia-sandbox-api.teocoop.site/"
      : "http://localhost:1337/";
  return {
    bursatil: bursatilEndpoints(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL),
  };
}
