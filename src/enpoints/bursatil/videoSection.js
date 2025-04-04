function videoSeccion({ client }) {
  function getById({ videoId }) {
    return client({
      url: `/api/video-secctions/${videoId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/video-secctions`,
      method: "get",
    });
  }

  function createVideo({ jwtToken, data }) {
    return client({
      url: `/api/video-secctions`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        Name: data.Name,
        url: data.url,
        description: data.description,
        categories_videos: data.categories_videos,
        delete: data.delete
      },
    });
  }

  function updateVideo({ jwtToken, videoId, data }) {
    return client({
      url: `/api/video-secctions/${videoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          Name: data.Name,
          url: data.url,
          description: data.description,
          categories_videos: data.categories_videos,
          delete: data.delete
        },
      },
    });
  }

  function deleteVideo({ jwtToken, videoId }) {
    return client({
      url: `/api/video-secctions/${videoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createVideo,
    updateVideo,
    deleteVideo,
  };
}

module.exports = videoSeccion;
