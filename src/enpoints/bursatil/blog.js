function blog({ client }) {
  function get({ jwtToken, blogId }) {
    return client({
      url: `/blog-resource-bursatils/${blogId}`,
      headers: {
        Authorization:
          `Bearer ${jwtToken}`,
      },
    });
  }

  function getAll({ jwtToken }) {
    return client({
      url: `/blog-resource-bursatils`,
      headers: {
        Authorization:
          `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    get,
    getAll
  };
}

module.exports = blog;
