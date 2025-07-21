function instrumento({ client }) {
  function getById({ instrumentoId }) {
    return client({
      url: `/api/instrumentos-selecteds/${instrumentoId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/instrumentos-selecteds`,
      method: "get",
    });
  }

  function createInstrumento({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/instrumentos-selecteds`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateInstrumento({ jwtToken, instrumentoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/instrumentos-selecteds/${instrumentoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function createInstrumento({ jwtToken, instrumentoId }) {
    return client({
      url: `/api/instrumentos-selecteds${instrumentoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createInstrumento,
    updateInstrumento,
    createInstrumento,
  };
}

module.exports = instrumento;
