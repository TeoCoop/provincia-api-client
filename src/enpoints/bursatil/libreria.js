function libreriaBursatil({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: "/api/libreria-bursatil",
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateLibreriaBursatil({ jwtToken, data }) {
    return client({
      url: "/api/libreria-bursatil",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data,
      },
    });
  }

  return {
    getAll,
    updateLibreriaBursatil,
  };
}
module.exports = libreriaBursatil;
