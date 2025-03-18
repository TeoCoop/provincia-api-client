"use strict";

function blog(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var blogId = _ref2.blogId;
    return client({
      url: "/blog-bursatils/".concat(blogId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/blog-bursatils",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function createBlog(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/blog-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          content: data.content,
          image: data.image,
          title: data.title,
          "delete": data["delete"]
        }
      }
    });
  }
  function updateBlog(_ref4) {
    var jwtToken = _ref4.jwtToken,
      blogId = _ref4.blogId,
      data = _ref4.data;
    return client({
      url: "/blog-bursatils/".concat(blogId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        content: data.content,
        image: data.image,
        title: data.title,
        "public": data["public"],
        "delete": data["delete"]
      }
    });
  }
  function deleteBlog(_ref5) {
    var jwtToken = _ref5.jwtToken,
      blogId = _ref5.blogId;
    return client({
      url: "/blog-bursatils/".concat(blogId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createBlog: createBlog,
    updateBlog: updateBlog,
    deleteBlog: deleteBlog
  };
}
module.exports = blog;