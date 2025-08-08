function homeBursatil({ client }) {
  function getById({ homeCardId }) {
    return client({
      url: `/api/home-bursatils/${homeCardId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/home-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/home-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateHome({ jwtToken, homeCardId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/home-bursatils/${homeCardId}`,
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
      url: "/api/home-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteHome({ jwtToken, homeCardId }) {
    return client({
      url: `/api/home-bursatils/${homeCardId}`,
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
    getAllPanel,
  };
}
module.exports = homeBursatil;
