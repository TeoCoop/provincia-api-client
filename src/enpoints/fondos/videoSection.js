function videoSeccion({ client }) {
  function getById({ videoId }) {
    return client({
      url: `/api/video-seccion-fondos/${videoId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/video-seccion-fondos`,
      method: "get",
    });
  }

  function createVideo({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/video-seccion-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateVideo({ jwtToken, videoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/video-seccion-fondos/${videoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteVideo({ jwtToken, videoId }) {
    return client({
      url: `/api/video-seccion-fondos/${videoId}`,
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
