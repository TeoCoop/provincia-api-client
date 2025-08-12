function category({ client }) {
  function getById({ categoryId }) {
    return client({
      url: `/api/category-blog-fondos/${categoryId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/category-blog-fondos`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/category-blog-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function createCategory({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/category-blog-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateCategory({ jwtToken, categoryId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/category-blog-fondos/${categoryId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteCategory({ jwtToken, categoryId }) {
    return client({
      url: `/api/category-blog-fondos/${categoryId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createCategory,
    updateCategory,
    deleteCategory,
    getAllPanel,
  };
}

module.exports = category;
