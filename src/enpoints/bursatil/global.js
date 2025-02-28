function global({ client }) {
  function getAll() {
    return client({
      url: `/global-bursatil`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateGlobal({ jwtToken, data }) {
    return client({
      url: `/global-bursatil`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          siteName: data.siteName,
          favicon: data.favicon,
          siteDescription: data.siteDescription,
          defaultSeo: data.defaultSeo,
          palette: data.palette,
        },
      },
    });
  }

  function deleteGlobal({ jwtToken }) {
    return client({
      url: `/global-bursatil`,
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
