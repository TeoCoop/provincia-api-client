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
  function updateMember({ jwtToken, memberId, data }) {
    return client({
      url: `/api/member-team-bursatils/${memberId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createMember({ jwtToken, data }) {
    return client({
      url: "/api/member-team-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
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
  };
}
module.exports = teamBursatil;
