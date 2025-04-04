"use strict";

function videoSeccion(_ref) {
  var client = _ref.client;
  function getById(_ref2) {
    var videoId = _ref2.videoId;
    return client({
      url: "/api/video-secctions/".concat(videoId),
      method: "get"
    });
  }
  function getAll() {
    return client({
      url: "/api/video-secctions",
      method: "get"
    });
  }
  function createVideo(_ref3) {
    var jwtToken = _ref3.jwtToken,
      data = _ref3.data;
    return client({
      url: "/api/video-secctions",
      method: "post",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        Name: data.Name,
        url: data.url,
        description: data.description,
        categories_videos: data.categories_videos,
        "delete": data["delete"]
      }
    });
  }
  function updateVideo(_ref4) {
    var jwtToken = _ref4.jwtToken,
      videoId = _ref4.videoId,
      data = _ref4.data;
    return client({
      url: "/api/video-secctions/".concat(videoId),
      method: "put",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      },
      data: {
        data: {
          Name: data.Name,
          url: data.url,
          description: data.description,
          categories_videos: data.categories_videos,
          "delete": data["delete"]
        }
      }
    });
  }
  function deleteVideo(_ref5) {
    var jwtToken = _ref5.jwtToken,
      videoId = _ref5.videoId;
    return client({
      url: "/api/video-secctions/".concat(videoId),
      method: "delete",
      headers: {
        Authorization: "Bearer ".concat(jwtToken)
      }
    });
  }
  return {
    getById: getById,
    getAll: getAll,
    createVideo: createVideo,
    updateVideo: updateVideo,
    deleteVideo: deleteVideo
  };
}
module.exports = videoSeccion;