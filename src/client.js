import axios from "axios";

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
  };
}

function fondosEndpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    blog: require("./enpoints/fondos/blog.js")({ client }),
    institutional: require("./enpoints/fondos/institutional.js")({ client }),
    category: require("./enpoints/fondos/foundCategory.js")({ client }),
    // accountOppening: require("./enpoints/bursatil/accountOpening.js")({
    //   client,
    // }),
    faqs: require("./enpoints/fondos/faqs.js")({
      client,
    }),
    founds: require("./enpoints/fondos/ourFounds.js")({
      client,
    }),
    global: require("./enpoints/fondos/global.js")({
      client,
    }),
  };
}
function generalEnpoints(baseURL) {
  const client = createClient(baseURL);
  return {
    test: require("./enpoints/general/testInversor.js")({ client }),
    questionTest: require("./enpoints/general/questionTest.js")({ client }),
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
      ? "http://localhost:1337/api"
      : env === "sandbox"
      ? "https://provincia.teocoop.site/api"
      : "https://provincia.teocoop.site/api";
  return {
    bursatil: bursatilEndpoints(baseURL),
    auth: authEndpoint(baseURL),
    general: generalEnpoints(baseURL),
    fondos: fondosEndpoints(baseURL),
  };
}
