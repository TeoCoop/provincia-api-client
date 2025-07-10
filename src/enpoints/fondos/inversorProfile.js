function inverterProfile({ client }) {
  function getById({ profileId }) {
    return client({
      url: `/api/inversor-profile-fondos/${profileId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/inversor-profile-fondos`,
      method: "get",
    });
  }
  function getResult({ value }) {
    return client({
      url: `/api/inversor-profile-fondos?value=${value}`,
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
      url: `/api/inversor-profile-fondos/${profileId}`,
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
      url: "/api/inversor-profile-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteProfile({ jwtToken, profileId }) {
    return client({
      url: `/api/inversor-profile-fondos/${profileId}`,
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
