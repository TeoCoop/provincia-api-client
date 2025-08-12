function teamFondos({ client }) {
  function getById({ memberId }) {
    return client({
      url: `/api/member-team-fondos/${memberId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/member-team-fondos`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/member-team-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateMember({ jwtToken, memberId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/member-team-fondos/${memberId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createMember({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/member-team-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteMember({ jwtToken, memberId }) {
    return client({
      url: `/api/member-team-fondos/${memberId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateMember,
    deleteMember,
    getById,
    createMember,
    getAllPanel,
  };
}
module.exports = teamFondos;
