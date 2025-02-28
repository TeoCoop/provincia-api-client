function questionTest({ client }) {
  function getById({ questionId }) {
    return client({
      url: `/questions/${questionId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: `/questions`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateProduct({ jwtToken, questionId, data }) {
    return client({
      url: `/questions/${questionId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
        },
      },
    });
  }
  function createQuestion({ jwtToken, data }) {
    return client({
      url: "/questions",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
        },
      },
    });
  }
  function deleteProduct({ jwtToken, questionId }) {
    return client({
      url: `/questions/${questionId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateProduct,
    deleteProduct,
    getById,
    createQuestion,
  };
}
module.exports = questionTest;
