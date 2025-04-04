function upload({ client }) {
  function update({ jwtToken, file }) {
    const formData = new FormData();
    formData.append("files", file); 
    return client({
      url: "/api/upload",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data", 
      },
      data: formData,
    });
  }
  return {
    update,
  };
}

module.exports = upload;
