function blogMedia({ client }) {
  function getAll({ jwtToken, page = 1, pageSize = 20 }) {
    const params = new URLSearchParams({
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
    });

    return client({
      url: `/api/blog-medias?${params.toString()}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function getById({ jwtToken, fileId }) {
    return client({
      url: `/api/blog-medias/${fileId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateFile({ jwtToken, data, fileId }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/blog-medias/${fileId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        formattedData,
      },
    });
  }
  function deleteFile({ jwtToken, fileId }) {
    return client({
      url: `/api/blog-medias/${fileId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function createFile({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/blog-medias",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  return {
    getAll,
    updateFile,
    deleteFile,
    getById,
    deleteFile,
    createFile,
  };
}

module.exports = blogMedia;
