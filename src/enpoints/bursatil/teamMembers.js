function teamBursatil({ client }) {
  function getById({ memberId }) {
    return client({
      url: `/api/member-team-bursatils/${memberId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/member-team-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/member-team-bursatils`,
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
      url: `/api/member-team-bursatils/${memberId}`,
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
      url: "/api/member-team-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteMember({ jwtToken, memberId }) {
    return client({
      url: `/api/member-team-bursatils/${memberId}`,
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
module.exports = teamBursatil;
