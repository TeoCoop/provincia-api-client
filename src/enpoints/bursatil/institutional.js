function institutional({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: `/institutional-bursatil`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function put({ jwtToken, data }) {
    return client({
      url: `/institutional-bursatil`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          mision: data.mision,
          vision: data.vision,
          values: data.values,
          team: data.team,
          code_of_conduct: data.code_of_conduct,
          directory: data.directory,
        },
      },
    });
  }
  function deleteInstitutional({ jwtToken }) {
    return client({
      url: `/institutional-bursatil`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    put,
    deleteInstitutional,
  };
}

module.exports = institutional;
