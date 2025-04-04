function blog({ client }) {
  function getById({ blogId }) {
    return client({
      url: `/api/blog-bursatils/${blogId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAll() {
    return client({
      url: `/api/blog-bursatils`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function createBlog({ jwtToken, data }) {
    return client({
      url: `/api/blog-bursatils`,
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: {
          content: data.content,
          image: data.image,
          title: data.title,
          delete: data.delete,
        },
      },
    });
  }

  function updateBlog({ jwtToken, blogId, data }) {
    return client({
      url: `/api/blog-bursatils/${blogId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        content: data.content,
        image: data.image,
        title: data.title,
        public: data.public,
        delete: data.delete,
      },
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
