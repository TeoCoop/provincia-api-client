function paletteAndColors({ client }) {
  function getByIdPalette({ paletteId }) {
    return client({
      url: `/api/palette-bursatils/${paletteId}`,
      method: "get",
    });
  }
  function getAllPalettes() {
    return client({
      url: `/api/palette-bursatils`,
      method: "get",
    });
  }
  function updatePalette({ jwtToken, paletteId, data }) {
    return client({
      url: `/api/palette-bursatils/${paletteId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createPalette({ jwtToken, data }) {
    return client({
      url: "/api/palette-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function deletePalette({ jwtToken, paletteId }) {
    return client({
      url: `/api/palette-bursatils/${paletteId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getByIdColor({ colorId }) {
    return client({
      url: `/api/colors-bursatils/${colorId}`,
      method: "get",
    });
  }
  function getAllColor() {
    return client({
      url: `/api/colors-bursatils`,
      method: "get",
    });
  }
  function updateColor({ jwtToken, colorId, data }) {
    return client({
      url: `/api/colors-bursatils/${colorId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function createColor({ jwtToken, data }) {
    return client({
      url: "/api/colors-bursatils",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: { ...data },
    });
  }
  function deleteColor({ jwtToken, colorId }) {
    return client({
      url: `/api/colors-bursatils/${colorId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  return {
    getAllColor,
    getByIdColor,
    deleteColor,
    createColor,
    updateColor,
    getAllPalettes,
    updatePalette,
    deletePalette,
    getByIdPalette,
    createPalette,
  };
}
module.exports = paletteAndColors;
