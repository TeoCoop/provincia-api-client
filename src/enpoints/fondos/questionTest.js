function questionTest({ client }) {
  function getById({ questionId }) {
    return client({
      url: `/api/questions-fondos/${questionId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: `/api/questions-fondos`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updatedQuestion({ jwtToken, questionId, data }) {
    return client({
      url: `/api/questions-fondos/${questionId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
          delete: data.delete
        },
      },
    });
  }
  function createQuestion({ jwtToken, data }) {
    return client({
      url: "/api/questions-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          answer: data.answer,
          question: data.question,
          delete: data.delete
        },
      },
    });
  }
  function deleteCuestion({ jwtToken, questionId }) {
    return client({
      url: `/api/questions-fondos/${questionId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updatedQuestion,
    deleteCuestion,
    getById,
    createQuestion,
  };
}
module.exports = questionTest;
