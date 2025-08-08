function testInversor({ client }) {
  function getAll() {
    return client({
      url: `/api/test-inversor-bursatil`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/test-inversor-bursatil`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateTest({ jwtToken, data }) {
    return client({
      url: `/api/test-inversor-bursatil`,
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
      url: `/api/test-inversor-bursatil`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getAll,
    updateTest,
    getAllPanel,
    deleteTest,
  };
}

module.exports = testInversor;
