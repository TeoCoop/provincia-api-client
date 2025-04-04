function faq({ client }) {
  function getById({ faqId }) {
    return client({
      url: `/api/faq-fondos/${faqId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/api/faq-fondos`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createFaq({ jwtToken, data }) {
    return client({
      url: `/api/faq-fondos`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        question: data.question,
        answer: data.answer,
        delete: data.delete
      },
    });
  }

  function updateFaq({ jwtToken, faqId, data }) {
    return client({
      url: `/api/faq-fondos/${faqId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          question: data.question,
          answer: data.answer,
          delete: data.delete
        },
      },
    });
  }

  function deleteFaq({ jwtToken, faqId }) {
    return client({
      url: `/api/faq-fondos/${faqId}`,
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
  };
}

module.exports = faq;
