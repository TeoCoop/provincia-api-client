function faq({ client }) {
  function getById({ categoryId }) {
    return client({
      url: `/fund-category-fondo/${categoryId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/faq-fondos`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createCategory({ jwtToken, data }) {
    return client({
      url: `/faq-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        type: data.type,
        our_founds: data.our_founds,
      },
    });
  }

  function updateCategory({ jwtToken, categoryId, data }) {
    return client({
      url: `/fund-category-fondo/${categoryId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          name: data.name,
          type: data.type,
          our_founds: data.our_founds,
        },
      },
    });
  }

  function deleteCategory({ jwtToken, categoryId }) {
    return client({
      url: `/fund-category-fondo/${categoryId}`,
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

module.exports = faq;
