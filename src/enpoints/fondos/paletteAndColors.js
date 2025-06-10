function paletteAndColors({ client }) {
  function getByIdPalette({ paletteId }) {
    return client({
      url: `/api/palette-fondos/${paletteId}`,
      method: "get",
    });
  }
  function getAllPalettes() {
    return client({
      url: `/api/palette-fondos`,
      method: "get",
    });
  }
  function updatePalette({ jwtToken, paletteId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/palette-fondos/${paletteId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createPalette({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/palette-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deletePalette({ jwtToken, paletteId }) {
    return client({
      url: `/api/palette-fondos/${paletteId}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
  function getByIdColor({ colorId }) {
    return client({
      url: `/api/colors-fondos/${colorId}`,
      method: "get",
    });
  }
  function getAllColor() {
    return client({
      url: `/api/colors-fondos`,
      method: "get",
    });
  }
  function updateColor({ jwtToken, colorId, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: `/api/colors-fondos/${colorId}`,
      method: "put",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function createColor({ jwtToken, data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/colors-fondos",
      method: "post",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      data: formattedData,
    });
  }
  function deleteColor({ jwtToken, colorId }) {
    return client({
      url: `/api/colors-fondos/${colorId}`,
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
