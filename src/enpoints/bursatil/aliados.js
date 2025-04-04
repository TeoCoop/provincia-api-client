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
    function updateAliado({ jwtToken, aliadoId, data }) {
      return client({
        url: `/api/aliados/${aliadoId}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        data: { ...data },
      });
    }
    function createAliado({ jwtToken, data }) {
      return client({
        url: "/api/aliados",
        method: "post",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        data: { ...data },
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
    };
  }
  module.exports = aliados;
  