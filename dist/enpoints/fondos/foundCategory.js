"use strict";

function foundCategory(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var categoryId = _ref2.categoryId;
    return client({
      url: "/found-categories/".concat(categoryId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/found-categories",
      method: "get"
    });
  }
  function createCategory(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/found-categories",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        name: data.name,
        type: data.type,
        our_founds: data.our_founds,
        "delete": data["delete"]
      }
    });
  }
  function updateCategory(_ref4) {
    var jwtToken = _ref4.jwtToken,
      categoryId = _ref4.categoryId,
      data = _ref4.data;
    return client({
      url: "/found-categories/".concat(categoryId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          name: data.name,
          type: data.type,
          our_founds: data.our_founds,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteCategory(_ref5) {
    var jwtToken = _ref5.jwtToken,
      categoryId = _ref5.categoryId;
    return client({
      url: "/found-categories/".concat(categoryId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createCategory: createCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
  };
}
module.exports = foundCategory;