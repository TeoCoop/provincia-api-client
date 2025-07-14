function categoriesVideos({ client }) {
  function getById({ categoriesId }) {
    return client({
      url: `/api/categories-video-fondos/${categoriesId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/categories-video-fondos?includeEmpty=false`,
      method: "get",
    });
  }
  function getAllPanel() {
    return client({
      url: `/api/categories-video-fondos?includeEmpty=true`,
      method: "get",
    });
  }

  function createCategoriesVideos({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/categories-video-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateCategoriesVideos({ jwtToken, categoriesId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/categories-video-fondos/${categoriesId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteCategoriesVideos({ jwtToken, categoriesId }) {
    return client({
      url: `/api/categories-video-fondos/${categoriesId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createCategoriesVideos,
    updateCategoriesVideos,
    deleteCategoriesVideos,
    getAllPanel,
  };
}

module.exports = categoriesVideos;
