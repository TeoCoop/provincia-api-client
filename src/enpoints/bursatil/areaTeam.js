function areasBursatil({ client }) {
  function getById({ areaId }) {
    return client({
      url: `/area-team-bursatils/${areaId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/area-team-bursatils`,
      method: "get",
    });
  }
  function updateArea({ jwtToken, areaId, data }) {
    return client({
      url: `/area-team-bursatils/${areaId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createArea({ jwtToken, data }) {
    return client({
      url: "/area-team-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function deleteArea({ jwtToken, areaId }) {
    return client({
      url: `/area-team-bursatils/${areaId}`,
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
  };
}
module.exports = areasBursatil;
