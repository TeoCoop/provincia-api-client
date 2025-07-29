function institutional({ client }) {
  function getAll() {
    return client({
      url: "/api/institutional-fondo",
      method: "get",
    });
  }
  function updateInstitutional({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/institutional-fondo",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: "/api/institutional-fondo",
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateInstitutional,
    deleteInstitutional,
  };
}
module.exports = institutional;
