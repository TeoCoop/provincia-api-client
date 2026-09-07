function dinamicLanding({ client }) {
  function getAll() {
    return client({
      url: `/api/dinamic-landings`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/dinamic-landings-backoffice`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateLanding({ jwtToken, data, ladingId }) {
    return client({
      url: `/api/dinamic-landings/${ladingId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data,
      },
    });
  }
  function deleteLanding({ jwtToken, ladingId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/dinamic-landings/${ladingId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createLanding({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/dinamic-landings`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  return {
    getAll,
    getAllPanel,
    updateLanding,
    createLanding,
    deleteLanding,
  };
}
module.exports = dinamicLanding;
