function upload({ client }) {
  function uploadFile({ jwtToken, file }) {
    console.log(file, "assas file");
    const formData = new FormData();
    formData.append("files", file); // Strapi espera "files"
    return client({
      url: "/upload",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data", // Necesario para FormData
      },
      data: formData,
    });
  }
  return {
    uploadFile,
  };
}

module.exports = upload;
