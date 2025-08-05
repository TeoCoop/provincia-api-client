function founds({ client }) {
  function getById({ foundId }) {
    return client({
      url: `/api/our-founds/${foundId}`,
      method: "get",
    });
  }
  function getByDocumentId({ foundDocumentId }) {
    return client({
      url: `/api/our-found/document/${foundDocumentId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/our-founds`,
      method: "get",
    });
  }
  function getOnlyNameAndNumber() {
    const query = `
    query {
      ourFounds {
        name
        numero_fondo
      }
    }
  `;

    return axios({
      url: "/graphql",
      method: "post",
      data: {
        query,
      },
    });
  }
  function getFilters() {
    const query = `
        query OurFounds(
        $caracteristicaDocumentId: ID
        $tipoActivoDocumentId: ID
        $valueInversorId: ID
      ) {
        ourFounds(
          filters: {
            and: [
              {
                caracteristicas_fondos: {
                  documentId: { eq: $caracteristicaDocumentId }
                }
              }
              {
                tipos_activos_fondos: {
                  documentId: { eq: $tipoActivoDocumentId }
                }
              }
              {
                inversor_profile_fondos:   {
                  documentId: { eq: $valueInversorId }
                }
              }
            ]
          }
        ) {
        name
        description
        numero_fondo
        moneda
        informationAt
        patrimonio
        link
        documentId
        factSheet {
          url
        }
      caracteristicas_fondos {
        value
        documentId
      }
      tipos_activos_fondos {
        value
        documentId
      }
      inversor_profile_fondos {
        title
        description
        documentId
        shortDescription
      }
        }
      }
`;
    const variables = {
      caracteristicaDocumentId,
      tipoActivoDocumentId,
      valueInversorId,
    };

    return client({
      url: `/graphql`,
      method: "post",
      data: {
        query,
        variables,
      },
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
    getFilters,
    getByDocumentId,
    getOnlyNameAndNumber,
  };
}

module.exports = founds;
// curl --request POST \
//     --header 'content-type: application/json' \
//     --url http://localhost:1337/graphql \
//     --data '{"query":"query ExampleQuery {\n  cuotaPartes(\n    filters: {\n      fecha: {\n        gte: \"2025-03-18\", \n        lte: \"2025-03-19\"\n      },\n      fondo: { numero_fondo: { eq: 9 } } }\n  ) {\n    documentId\n    valor\n    fecha\n    fondo {\n      numero_fondo\n      name\n    }\n  }\n}","variables":{}}'
