function institutional({ client }) {
  function getAll() {
    return client({
      url: "/api/institutional-fondos",
      method: "get",
    });
  }
  function updateInstitutional({ jwtToken }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/institutional-fondos",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: "/api/institutional-fondos",
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
