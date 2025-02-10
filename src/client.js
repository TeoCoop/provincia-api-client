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
    }
}

function authEndpoint(baseURL) {
    const client = createClient(baseURL);
    return {
        auth: require("./enpoints/auth/auth.js")({client}),
    }
}

function client(options) {
    const { env } = options;
    const baseURL = env === "dev" ? "http://localhost:1337/api" : env === "sandbox" ? "https://provincia.teocoop.site/api" : "https://provincia.teocoop.site/api"
    return {
        _createClient: createClient(baseURL),
        bursatil: bursatilEndpoints(baseURL),
        auth: authEndpoint(baseURL)
    };
}

module.exports = { client };
