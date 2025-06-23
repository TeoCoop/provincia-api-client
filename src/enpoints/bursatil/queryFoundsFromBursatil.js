function queryFondosBursatil({ client }) {
  function get() {
    const query = `
    query ExampleQuery($filters: ProductBursatilFiltersInput, $ourFoundsFilters2: OurFoundFiltersInput) {
      productBursatils(filters: $filters) {
        title
        isFound
        description
        title
        shortDescription
        pageUrl
        documentId
      }
      ourFounds(filters: $ourFoundsFilters2) {
        name
        description
        documentId
        patrimonio
        updatedAt
        publishedAt
        factSheet
      }
    }
  `;

    const variables = {
      filters: { isFound: { eq: true }, isDelete: { eq: false } },
      ourFoundsFilters2: { isDelete: { eq: false } },
    };

    return client({
      url: "/graphql",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query,
        variables,
      },
    });
  }

  return {
    get, // ✅ Agregamos el nuevo método aquí
  };
}

module.exports = queryFondosBursatil;
