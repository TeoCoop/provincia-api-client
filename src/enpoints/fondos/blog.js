function blog({ client }) {
  function getById({ blogId }) {
    return client({
      url: `/api/blog-fondos/${blogId}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }

  function getAllPanel({ jwtToken }) {
    return client({
      url: `/api/blog-fondos`,
      method: "get",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getAll() {
    return client({
      url: `/api/blog-fondos`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getFilters({ year, topicDocumentId, categoryDocumentId, search }) {
    const query = `
     query BlogFondos(
      $year: DateTime
      $topicDocumentId: ID
      $categoryDocumentId: ID
      $search: String
    ) {
      blogFondos(
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
              topic_blog_fondos: {
                documentId: {
                  eq: $topicDocumentId
                }
              }
            }
            {
              category_blog_fondos: {
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
        topic_blog_fondos {
          topic
        }
        category_blog_fondos {
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
      url: `/api/blog-fondos`,
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
      url: `/api/blog-fondos/${blogId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }

  function deleteBlog({ jwtToken, blogId }) {
    return client({
      url: `/api/blog-fondos/${blogId}`,
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
