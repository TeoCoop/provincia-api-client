function contactNewsleter({ client }) {
  function getById({ jwtToken, contactId }) {
    return client({
      url: `/api/contact-client-bursatils/${contactId}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function getAll({ jwtToken }) {
    return client({
      url: `/api/contact-client-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  function createContact({ data }) {
    const formattedData = {
      data: {
        ...data,
        isDelete: false,
        isAddCanal: false,
      },
    };
    return client({
      url: `/api/contact-client-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateContact({ jwtToken, contactId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/contact-client-bursatils/${contactId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteContact({ jwtToken, contactId }) {
    return client({
      url: `/api/contact-client-bursatils/${contactId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createContact,
    updateContact,
    deleteContact,
  };
}

module.exports = contactNewsleter;
