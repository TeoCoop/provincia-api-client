function account({ client }) {
  function getById({ accountId }) {
    return client({
      url: `/api/account-opening-bursatils/${accountId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/api/account-opening-bursatils`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createAccount({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/account-opening-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateAccount({ jwtToken, accountId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/account-opening-bursatils/${accountId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteAccount({ jwtToken, accountId }) {
    return client({
      url: `/api/account-opening-bursatils/${accountId}`,
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
