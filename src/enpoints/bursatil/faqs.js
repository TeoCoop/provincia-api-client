function faq({ client }) {
  function getById({ faqId }) {
    return client({
      url: `/faq-bursatils/${faqId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/faq-bursatils`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createFaq({ jwtToken, data }) {
    return client({
      url: `/faq-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        question: data.question,
        answer: data.answer,
      },
    });
  }

  function updateFaq({ jwtToken, faqId, data }) {
    return client({
      url: `/faq-bursatils/${faqId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          question: data.question,
          answer: data.answer,
        },
      },
    });
  }

  function deleteFaq({ jwtToken, faqId }) {
    return client({
      url: `/faq-bursatils/${faqId}`,
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
