function blog({ client }) {
  function getById({ blogId }) {
    return client({
      url: `/api/blog-bursatils/${blogId}`,
      method: "get",
    });
  }

  function getAll() {
    return client({
      url: `/api/blog-bursatils`,
      method: "get",
    });
  }

  function createBlog({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/blog-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function updateBlog({ jwtToken, blogId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/blog-bursatils/${blogId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteBlog({ jwtToken, blogId }) {
    return client({
      url: `/api/blog-bursatils/${blogId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  return {
    getById,
    getAll,
    createBlog,
    updateBlog,
    deleteBlog,
  };
}

module.exports = blog;
