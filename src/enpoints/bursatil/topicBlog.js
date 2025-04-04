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
    function updateTopic({ jwtToken, topicId, data }) {
      return client({
        url: `/api/topic-blog-bursatils/${topicId}`,
        method: "put",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        data: { ...data },
      });
    }
    function createTopic({ jwtToken, data }) {
      return client({
        url: "/api/topic-blog-bursatils",
        method: "post",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        data: { ...data },
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
    };
  }
  module.exports = topicBlog;