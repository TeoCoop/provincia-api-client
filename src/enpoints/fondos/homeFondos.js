function homeFondos({ client }) {
  function getById({ homeCardId }) {
    return client({
      url: `/api/home-fondos/${homeCardId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/home-fondos`,
      method: "get",
    });
  }
  function updateHome({ jwtToken, homeCardId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/home-fondos/${homeCardId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createHome({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/home-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteHome({ jwtToken, homeCardId }) {
    return client({
      url: `/api/home-fondos/${homeCardId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateHome,
    deleteHome,
    getById,
    createHome,
  };
}
module.exports = homeFondos;
