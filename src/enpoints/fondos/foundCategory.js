function foundCategory({ client }) {
  function getById({ categoryId }) {
    return client({
      url: `/api/found-categories/${categoryId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/found-categories`,
      method: "get",
    });
  }

  function createCategory({ jwtToken, data }) {
    return client({
      url: `/api/found-categories`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        type: data.type,
        our_founds: data.our_founds,
        delete: data.delete
      },
    });
  }

  function updateCategory({ jwtToken, categoryId, data }) {
    return client({
      url: `/api/found-categories/${categoryId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          name: data.name,
          type: data.type,
          our_founds: data.our_founds,
          delete: data.delete
        },
      },
    });
  }

  function deleteCategory({ jwtToken, categoryId }) {
    return client({
      url: `/api/found-categories/${categoryId}`,
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
  };
}

module.exports = foundCategory;
