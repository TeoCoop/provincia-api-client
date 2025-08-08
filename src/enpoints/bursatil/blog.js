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
  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/blog-bursatils`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getFilters({ year, topicDocumentId, categoryDocumentId, search }) {
    const query = `
      query BlogBursatil(
        $year: DateTime
        $topicDocumentId: ID
        $categoryDocumentId: ID
        $search: String
      ) {
        blogBursatils(
          filters: {
            and: [
            {
              isDelete: {
                eq: false
              }
            }
              {
                createdAt: {
                  gte: $year
                }
              }
              {
                topic_blog_bursatils: {
                  documentId: {
                    eq: $topicDocumentId
                  }
                }
              }
              {
                category_blog_bursatil: {
                  documentId: {
                    eq: $categoryDocumentId
                  }
                }
              }
              {
                or: [
                  { title: { containsi: $search } }
                  { subtitle: { containsi: $search } }
                  { content: { containsi: $search } }
                ]
              }
            ]
          }
        ) {
          createdAt
          title
          subtitle
          content
          author
          topic_blog_bursatils {
            topic
          }
          category_blog_bursatil {
            name
          }
        }
      }
    `;

    const variables = {
      year,
      topicDocumentId,
      categoryDocumentId,
      search,
    };

    return client({
      url: `/graphql`,
      method: "post",
      data: {
        query,
        variables,
      },
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
    getFilters,
    getAllPanel,
  };
}

module.exports = blog;
