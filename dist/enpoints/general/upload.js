"use strict";

function upload(_ref) {
  var client = _ref.client;
  function uploadFile(_ref2) {
    var jwtToken = _ref2.jwtToken,
      file = _ref2.file;
    console.log(file, "assas file");
    var formData = new FormData();
    formData.append("files", file); // Strapi espera "files"
    return client({
      url: "/upload",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken),
        "Content-Type": "multipart/form-data" // Necesario para FormData
      },
      data: formData
    });
  }
  return {
    uploadFile: uploadFile
  };
}
module.exports = upload;