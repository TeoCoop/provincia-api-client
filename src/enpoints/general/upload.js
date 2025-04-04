function upload({ client }) {
  function update({ jwtToken, file }) {
    console.log(file, "assas file");
    const formData = new FormData();
    formData.append("files", file); 
    return client({
      url: "/upload",
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
