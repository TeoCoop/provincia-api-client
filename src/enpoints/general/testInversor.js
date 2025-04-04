function testInversor({ client }) {
  function getAll() {
    return client({
      url: `/api/test-inversor`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateTest({ jwtToken, data }) {
    return client({
      url: `/api/test-inversor`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          questions: data.questions,
          delete: data.delete,
        },
      },
    });
  }

  function deleteTest({ jwtToken }) {
    return client({
      url: `/api/test-inversor`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getAll,
    updateTest,
    deleteTest,
  };
}

module.exports = testInversor;
