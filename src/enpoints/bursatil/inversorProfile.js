function inverterProfile({ client }) {
  function getById({ profileId }) {
    return client({
      url: `/api/inversor-profile-bursatils/${profileId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/inversor-profile-bursatils`,
      method: "get",
    });
  }
  function getResult({ value }) {
    return client({
      url: `/api/inversor-profile-bursatils?value=${value}`,
      method: "get",
    });
  }
  function updateProfile({ jwtToken, profileId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/inversor-profile-bursatils/${profileId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createProfile({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/inversor-profile-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteProfile({ jwtToken, profileId }) {
    return client({
      url: `/api/inversor-profile-bursatils/${profileId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateProfile,
    deleteProfile,
    getById,
    createProfile,
    getResult,
  };
}
module.exports = inverterProfile;
