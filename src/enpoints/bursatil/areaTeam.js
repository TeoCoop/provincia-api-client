function areasBursatil({ client }) {
  function getById({ areaId }) {
    return client({
      url: `/api/area-team-bursatils/${areaId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/area-team-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/area-team-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateArea({ jwtToken, areaId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/area-team-bursatils/${areaId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createArea({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/area-team-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteArea({ jwtToken, areaId }) {
    return client({
      url: `/api/area-team-bursatils/${areaId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateArea,
    deleteArea,
    getById,
    createArea,
    getAllPanel,
  };
}
module.exports = areasBursatil;
