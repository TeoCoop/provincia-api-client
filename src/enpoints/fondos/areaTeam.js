function areasFondos({ client }) {
  function getById({ areaId }) {
    return client({
      url: `/api/area-team-fondos/${areaId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/area-team-fondos`,
      method: "get",
    });
  }
  function updateArea({ jwtToken, areaId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/area-team-fondos/${areaId}`,
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
      url: "/api/area-team-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteArea({ jwtToken, areaId }) {
    return client({
      url: `/api/area-team-fondos/${areaId}`,
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
module.exports = areasFondos;
