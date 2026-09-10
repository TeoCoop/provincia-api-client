function form({ client }) {
  function getAll({
    jwtToken,
    page = 1,
    pageSize = 25,
    search,
    motivoDocumentId,
    dateFrom,
    dateTo,
  }) {
    const params = new URLSearchParams();
    params.set("pagination[page]", page);
    params.set("pagination[pageSize]", pageSize);

    if (search) {
      params.set("filters[$or][0][name][$containsi]", search);
      params.set("filters[$or][1][email][$containsi]", search);
      params.set("filters[$or][2][message][$containsi]", search);
    }
    if (motivoDocumentId) {
      params.set(
        "filters[motivo_consulta_fondo][documentId][$eq]",
        motivoDocumentId
      );
    }
    if (dateFrom) {
      params.set("filters[createdAt][$gte]", dateFrom);
    }
    if (dateTo) {
      params.set("filters[createdAt][$lte]", dateTo);
    }

    return client({
      url: `/api/form-fondos?${params.toString()}`,
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
