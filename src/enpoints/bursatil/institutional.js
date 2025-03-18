function institutional({ client }) {
  function getAll() {
    return client({
      url: "/institutional-bursatil",
      method: "get",
    });
  }
  function updateInstitutional({ jwtToken }) {
    return client({
      url: "/institutional-bursatil",
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
          presidente: data.presidente,
          vicepresidente: data.vicepresidente,
          delete: data.delete
        },
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
