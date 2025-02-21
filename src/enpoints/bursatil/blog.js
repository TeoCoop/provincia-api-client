function blog({ client }) {
  function getById({ jwtToken, blogId }) {
    return client({
      url: `/blog-bursatils/${blogId}`,
      method: "get",
      headers: {
        Authorization:
          `Bearer ${jwtToken}`,
      },
    });
  }

  function getAll({ jwtToken }) {
    return client({
      url: `/blog-bursatils`,
      method: "get",
      headers: {
        Authorization:
          `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll
  };
}

module.exports = blog;
