"use strict";

function productBursatil(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var productId = _ref2.productId;
    return client({
      url: "/product-bursatils/".concat(productId),
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function getAll() {
    return client({
      url: "/product-bursatils",
      method: "get"
      // headers: {
      //   Authorization: `Bearer ${jwtToken}`,
      // },
    });
  }
  function updateProduct(_ref3) {
    var jwtToken = _ref3.jwtToken,
      productId = _ref3.productId,
      data = _ref3.data;
    return client({
      url: "/product-bursatils/".concat(productId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          title: data.title,
          category: data.category,
          pageUrl: data.pageUrl,
          description: data.description,
          shortDescription: data.shortDescription,
          "delete": data["delete"]
        }
      }
    });
  }
  function createProduct(_ref4) {
    var jwtToken = _ref4.jwtToken,
      data = _ref4.data;
    return client({
      url: "/product-bursatils",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          title: data.title,
          category: data.category,
          pageUrl: data.pageUrl,
          description: data.description,
          shortDescription: data.shortDescription,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteProduct(_ref5) {
    var jwtToken = _ref5.jwtToken,
      productId = _ref5.productId;
    return client({
      url: "/product-bursatils/".concat(productId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getAll: getAll,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    getById: getById,
    createProduct: createProduct
  };
}
module.exports = productBursatil;