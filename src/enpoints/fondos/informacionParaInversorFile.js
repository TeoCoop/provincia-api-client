function informacionParaElInversorFile({ client }) {
  function getById({ fileId }) {
    return client({
      url: `/api/informacion-inversor-files/${fileId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/informacion-inversor-files`,
      method: "get",
    });
  }
  function updateFile({ jwtToken, fileId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/informacion-inversor-files/${fileId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createFile({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/informacion-inversor-files",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteFile({ jwtToken, fileId }) {
    return client({
      url: `/api/informacion-inversor-files/${fileId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateFile,
    deleteFile,
    getById,
    createFile,
  };
}
module.exports = informacionParaElInversorFile;
