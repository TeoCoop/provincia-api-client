function institutional({ client }) {
  function getAll() {
    return client({
      url: "/api/institutional-bursatil",
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
      url: "/api/institutional-bursatil",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: formattedData,
      },
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: "/api/institutional-bursatil",
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
