function aliados({ client }) {
  function getById({ aliadoId }) {
    return client({
      url: `/api/aliados/${aliadoId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/aliados`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/aliados`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateAliado({ jwtToken, aliadoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/aliados/${aliadoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createAliado({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/aliados",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteAliado({ jwtToken, aliadoId }) {
    return client({
      url: `/api/aliados/${aliadoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateAliado,
    deleteAliado,
    getById,
    createAliado,
    getAllPanel,
  };
}
module.exports = aliados;
