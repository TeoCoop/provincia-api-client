function motivoConsulta({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: `/api/motivo-consulta-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getFront() {
    return client({
      url: `/api/motivo-consulta-fondos-front`,
      method: "get",
    });
  }
  function updateMotivo({ jwtToken, documentId, data }) {
    return client({
      url: `/api/motivo-consulta-fondos/${documentId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data,
      },
    });
  }
  function deleteMotivo({ jwtToken, documentId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/motivo-consulta-fondos/${documentId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createMotivo({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/motivo-consulta-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  return {
    getAll,
    updateMotivo,
    createMotivo,
    deleteMotivo,
    getFront,
  };
}
module.exports = motivoConsulta;
