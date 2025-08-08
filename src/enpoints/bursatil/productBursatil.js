function productBursatil({ client }) {
  function getById({ productId }) {
    return client({
      url: `/api/product-bursatils/${productId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/product-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/product-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateProduct({ jwtToken, productId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/product-bursatils/${productId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createProduct({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/product-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteProduct({ jwtToken, productId }) {
    return client({
      url: `/api/product-bursatils/${productId}`,
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
    getAllPanel,
  };
}
module.exports = productBursatil;
