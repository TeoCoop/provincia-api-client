function blogMedia({ client }) {
  function getAll() {
    return client({
      url: "/api/blog-media",
      method: "get",
    });
  }

  function updateBlogMedia({ jwtToken, data }) {
    return client({
      url: "/api/blog-media",
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: {
        data: data, // data debe tener { files: [ { name, file: id } ] }
      },
    });
  }

  function deleteBlogMedia({ jwtToken }) {
    return client({
      url: "/api/blog-media",
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  // Nuevo método que sube el archivo y actualiza el blog-media
  async function uploadAndUpdate({ jwtToken, file, name }) {
    // Paso 1: Subir el archivo a /api/upload
    const formData = new FormData();
    formData.append("files", file);

    const uploadResponse = await client({
      url: "/api/upload",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });

    // El uploadResponse debería incluir data con el id del archivo subido
    // Ejemplo: uploadResponse.data[0].id (puede variar según Strapi)
    const uploadedFile = Array.isArray(uploadResponse.data)
      ? uploadResponse.data[0]
      : uploadResponse.data;

    if (!uploadedFile?.id) {
      throw new Error("No se recibió ID del archivo subido");
    }

    const fileId = uploadedFile.id;

    // Paso 2: Obtener el estado actual de blog-media (opcional, para no borrar otros archivos)
    const currentBlogMediaResponse = await getAll();
    const currentFiles = currentBlogMediaResponse.data?.attributes?.files || [];

    // Paso 3: Construir nuevo array files agregando el nuevo archivo
    // Si quieres reemplazar, haz solo uno, si quieres agregar, concatena
    const updatedFiles = [
      ...currentFiles,
      {
        name,
        file: fileId,
      },
    ];

    // Paso 4: Actualizar blog-media con el nuevo array files
    return updateBlogMedia({
      jwtToken,
      data: {
        files: updatedFiles,
      },
    });
  }

  return {
    getAll,
    updateBlogMedia,
    deleteBlogMedia,
    uploadAndUpdate, // exportamos la función nueva
  };
}

module.exports = blogMedia;
