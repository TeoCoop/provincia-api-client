function productBursatil({ client }) {
  function getById({ productId }) {
    return client({
      url: `/product-bursatils/${productId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: `/product-bursatils`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateProduct({ jwtToken, productId, data }) {
    return client({
      url: `/product-bursatils/${productId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          title: data.title,
          category: data.category,
          pageUrl: data.pageUrl,
          description: data.description,
          shortDescription: data.shortDescription,
          delete: data.delete
        },
      },
    });
  }
  function createProduct({ jwtToken, data }) {
    return client({
      url: "/product-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          title: data.title,
          category: data.category,
          pageUrl: data.pageUrl,
          description: data.description,
          shortDescription: data.shortDescription,
          delete: data.delete
        },
      },
    });
  }
  function deleteProduct({ jwtToken, productId }) {
    return client({
      url: `/product-bursatils/${productId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateProduct,
    deleteProduct,
    getById,
    createProduct,
  };
}
module.exports = productBursatil;
