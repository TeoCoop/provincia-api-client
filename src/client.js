import axios from 'axios';

function createClient(baseURL) {
    return axios.create({
        baseURL: `${baseURL}`,
        headers: { 'Content-Type': 'application/json' }
    });
}

function bursatilEndpoints(baseURL) {
    const client = createClient(baseURL);    
    return {
        blog: require("./enpoints/bursatil/blog.js")({ client }),
        institutional: require('./enpoints/bursatil/institutional.js')({ client }),
    }
}

function authEndpoint(baseURL) {
    const client = createClient(baseURL);
    return require("./enpoints/auth/auth.js")({client})
}

export function client(options) {
    const { env } = options;
    const baseURL = env === "development" ? "http://localhost:1337/api" : env === "sandbox" ? "https://provincia.teocoop.site/api" : "https://provincia.teocoop.site/api"
    return {
        bursatil: bursatilEndpoints(baseURL),
        auth: authEndpoint(baseURL)
    };
}