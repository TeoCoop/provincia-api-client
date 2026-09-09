function form({ client }) {
  function getAll({ jwtToken }) {
    return client({
      url: `/api/form-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateForm({ jwtToken, documentId, data }) {
    return client({
      url: `/api/form-fondos/${documentId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data,
      },
    });
  }
  function deleteForm({ jwtToken, documentId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/form-fondos/${documentId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createForm({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/form-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  return {
    getAll,
    updateForm,
    createForm,
    deleteForm,
  };
}
module.exports = form;
