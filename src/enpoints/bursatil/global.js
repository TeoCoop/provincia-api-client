function global({ client }) {
  function getAll() {
    return client({
      url: `/api/global-bursatil`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateGlobal({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/global-bursatil`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData
    });
  }

  function deleteGlobal({ jwtToken }) {
    return client({
      url: `/api/global-bursatil`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getAll,
    updateGlobal,
    deleteGlobal,
  };
}

module.exports = global;
