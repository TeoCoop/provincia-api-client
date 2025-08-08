function videoSeccion({ client }) {
  function getById({ videoId }) {
    return client({
      url: `/api/video-seccions/${videoId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/video-seccions`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/video-seccions`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function createVideo({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/video-seccions`,
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
      url: `/api/video-seccions/${videoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteVideo({ jwtToken, videoId }) {
    return client({
      url: `/api/video-seccions/${videoId}`,
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
    getAllPanel,
  };
}

module.exports = videoSeccion;
