function testInversor({ client }) {
  function getAll() {
    return client({
      url: `/test-inversor`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateTest({ jwtToken, data }) {
    return client({
      url: `/test-inversor`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          questions: data.questions,
        },
      },
    });
  }

  function deleteTest({ jwtToken }) {
    return client({
      url: `/test-inversor`,
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
