function topicBlog({ client }) {
  function getById({ topicId }) {
    return client({
      url: `/api/topic-blog-fondos/${topicId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/topic-blog-fondos`,
      method: "get",
    });
  }
  function updateTopic({ jwtToken, topicId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/topic-blog-fondos/${topicId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createTopic({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/topic-blog-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteTopic({ jwtToken, topicId }) {
    return client({
      url: `/api/topic-blog-fondos/${topicId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAll,
    updateTopic,
    deleteTopic,
    getById,
    createTopic,
  };
}
module.exports = topicBlog;
