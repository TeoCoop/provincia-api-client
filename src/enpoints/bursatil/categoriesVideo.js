function categoriesVideos({ client }) {
  function getById({ categoriesId }) {
    return client({
      url: `/api/categories-videos/${categoriesId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/categories-videos`,
      method: "get",
    });
  }

  function createCategoriesVideos({ jwtToken, data }) {
    return client({
      url: `/api/categories-videos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        categoryName: data.categoryName,
        video_seccions: data.video_seccions,
        delete: data.delete,
      },
    });
  }

  function updateCategoriesVideos({ jwtToken, categoriesId, data }) {
    return client({
      url: `/api/categories-videos/${categoriesId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          categoryName: data.categoryName,
          video_seccions: data.video_seccions,
          delete: data.delete,
        },
      },
    });
  }

  function deleteCategoriesVideos({ jwtToken, categoriesId }) {
    return client({
      url: `/api/categories-videos/${categoriesId}`,
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
  };
}

module.exports = categoriesVideos;
