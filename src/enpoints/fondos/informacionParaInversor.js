function informacionParaElInversor({ client }) {
  function getById({ infoId }) {
    return client({
      url: `/api/informacion-para-inversors/${infoId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/informacion-para-inversors`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/informacion-para-inversors`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateInformacion({ jwtToken, infoId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/informacion-para-inversors/${infoId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createInformacion({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/informacion-para-inversors",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteInformacion({ jwtToken, infoId }) {
    return client({
      url: `/api/informacion-para-inversors/${infoId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateInformacion,
    deleteInformacion,
    getById,
    createInformacion,
    getAllPanel,
  };
}
module.exports = informacionParaElInversor;
