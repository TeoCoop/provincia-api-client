"use strict";

function queryFondosBursatil(_ref) {
  var client = _ref.client;
  function get() {
    var query = "\n    query ExampleQuery($filters: ProductBursatilFiltersInput, $ourFoundsFilters2: OurFoundFiltersInput) {\n      productBursatils(filters: $filters) {\n        title\n        isFound\n        description\n        title\n        shortDescription\n        pageUrl\n        documentId\n      }\n      ourFounds(filters: $ourFoundsFilters2) {\n        name\n        description\n        documentId\n        patrimonio\n        updatedAt\n        publishedAt\n      }\n    }\n  ";
    var variables = {
      filters: {
        isFound: {
          eq: true
        },
        isDelete: {
          eq: false
        }
      },
      ourFoundsFilters2: {
        isDelete: {
          eq: false
        }
      }
    };
    return client({
      url: "/graphql",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        query: query,
        variables: variables
      }
    });
  }
  return {
    get: get // ✅ Agregamos el nuevo método aquí
  };
}
module.exports = queryFondosBursatil;