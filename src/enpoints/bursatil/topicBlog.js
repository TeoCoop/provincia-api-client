function topicBlog({ client }) {
  function getById({ topicId }) {
    return client({
      url: `/api/topic-blog-bursatils/${topicId}`,
      method: "get",
    });
  }
  function getAll() {
    return client({
      url: `/api/topic-blog-bursatils`,
      method: "get",
    });
  }
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/topic-blog-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function updateTopic({ jwtToken, topicId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/topic-blog-bursatils/${topicId}`,
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
      url: "/api/topic-blog-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteTopic({ jwtToken, topicId }) {
    return client({
      url: `/api/topic-blog-bursatils/${topicId}`,
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
    getAllPanel,
  };
}
module.exports = topicBlog;
