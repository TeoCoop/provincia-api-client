function contactAsesor({ client }) {
  function getById({ jwtToken, asesorId }) {
    return client({
      url: `/api/asesores-contact-bursatils/${asesorId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function getAll({ jwtToken }) {
    return client({
      url: `/api/asesores-contact-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function createAsesor({ data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/asesores-contact-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateContact({ jwtToken, asesorId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/asesores-contact-bursatils/${asesorId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteAsesor({ jwtToken, asesorId }) {
    return client({
      url: `/api/asesores-contact-bursatils/${asesorId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createAsesor,
    updateContact,
    deleteAsesor,
  };
}

module.exports = contactAsesor;
