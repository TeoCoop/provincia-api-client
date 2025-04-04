function institutional({ client }) {
  function getAll() {
    return client({
      url: "/institutional-bursatil",
      method: "get",
    });
  }
  function updateInstitutional({ jwtToken, data }) {
    return client({
      url: "/institutional-bursatil",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: { ...data },
      },
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: "/institutional-bursatil",
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
