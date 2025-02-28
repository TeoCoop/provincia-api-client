function account({ client }) {
  function getById({ accountId }) {
    return client({
      url: `/account-opening-bursatils/${accountId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/account-opening-bursatils`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createAccount({ jwtToken, data }) {
    return client({
      url: `/account-opening-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        uploads: data.uploads,
      },
    });
  }

  function updateAccount({ jwtToken, accountId, data }) {
    return client({
      url: `/account-opening-bursatils/${accountId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        name: data.name,
        uploads: data.uploads,
      },
    });
  }

  function deleteAccount({ jwtToken, accountId }) {
    return client({
      url: `/account-opening-bursatils/${accountId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createAccount,
    updateAccount,
    deleteAccount,
  };
}

module.exports = account;
