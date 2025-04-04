"use strict";

function upload(_ref) {
  var client = _ref.client;
  function update(_ref2) {
    var jwtToken = _ref2.jwtToken,
      file = _ref2.file;
    console.log(file, "assas file");
    var formData = new FormData();
    formData.append("files", file);
    return client({
      url: "/upload",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken),
        "Content-Type": "multipart/form-data"
      },
      data: formData
    });
  }
  return {
    update: update
  };
}
module.exports = upload;