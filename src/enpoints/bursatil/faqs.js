function faq({ client }) {
  function getById({ faqId }) {
    return client({
      url: `/api/faq-bursatils/${faqId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/faq-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/faq-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function createFaq({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/faq-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateFaq({ jwtToken, faqId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/faq-bursatils/${faqId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteFaq({ jwtToken, faqId }) {
    return client({
      url: `/api/faq-bursatils/${faqId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createFaq,
    updateFaq,
    deleteFaq,
    getAllPanel,
  };
}

module.exports = faq;
