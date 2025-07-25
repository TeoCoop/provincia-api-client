function libreriaBursatil({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: "/api/libreria-fondos",
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getById({ jwtToken, fileId }) {
    return client({
      url: `/api/libreria-fondos/${fileId}`,
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
      url: `/api/libreria-fondos/${fileId}`,
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
      url: `/api/libreria-fondos/${fileId}`,
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
      url: "/api/libreria-fondos",
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
    createFile,
    deleteFile,
    getById,
  };
}
module.exports = libreriaBursatil;
