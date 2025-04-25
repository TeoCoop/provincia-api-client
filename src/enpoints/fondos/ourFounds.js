function founds({ client }) {
  function getById({ foundId }) {
    return client({
      url: `/api/our-founds/${foundId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/our-founds`,
      method: "get",
    });
  }

  function createFound({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/our-founds`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateFound({ jwtToken, foundId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/our-founds/${foundId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteFound({ jwtToken, foundId }) {
    return client({
      url: `/api/our-founds/${foundId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createFound,
    updateFound,
    deleteFound,
  };
}

module.exports = founds;
// curl --request POST \
//     --header 'content-type: application/json' \
//     --url http://localhost:1337/graphql \
//     --data '{"query":"query ExampleQuery {\n  cuotaPartes(\n    filters: {\n      fecha: {\n        gte: \"2025-03-18\", \n        lte: \"2025-03-19\"\n      },\n      fondo: { numero_fondo: { eq: 9 } } }\n  ) {\n    documentId\n    valor\n    fecha\n    fondo {\n      numero_fondo\n      name\n    }\n  }\n}","variables":{}}'
