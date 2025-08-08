function category({ client }) {
  function getById({ categoryId }) {
    return client({
      url: `/api/category-blog-bursatils/${categoryId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/category-blog-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/category-blog-bursatils`,
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
      url: `/api/category-blog-bursatils`,
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
      url: `/api/category-blog-bursatils/${categoryId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteCategory({ jwtToken, categoryId }) {
    return client({
      url: `/api/category-blog-bursatils/${categoryId}`,
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
