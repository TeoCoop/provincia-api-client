"use strict";

function categoriesVideos(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var categoriesId = _ref2.categoriesId;
    return client({
      url: "/categories-videos/".concat(categoriesId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/categories-videos",
      method: "get"
    });
  }
  function createCategoriesVideos(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/categories-videos",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        categoryName: data.categoryName,
        video_seccions: data.video_seccions,
        "delete": data["delete"]
      }
    });
  }
  function updateCategoriesVideos(_ref4) {
    var jwtToken = _ref4.jwtToken,
      categoriesId = _ref4.categoriesId,
      data = _ref4.data;
    return client({
      url: "/categories-videos/".concat(categoriesId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          categoryName: data.categoryName,
          video_seccions: data.video_seccions,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteCategoriesVideos(_ref5) {
    var jwtToken = _ref5.jwtToken,
      categoriesId = _ref5.categoriesId;
    return client({
      url: "/categories-videos/".concat(categoriesId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createCategoriesVideos: createCategoriesVideos,
    updateCategoriesVideos: updateCategoriesVideos,
    deleteCategoriesVideos: deleteCategoriesVideos
  };
}
module.exports = categoriesVideos;