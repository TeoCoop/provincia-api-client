"use strict";

function simuladorRendimiento(_ref) {
  var client = _ref.client;
  function simular(_ref2) {
    var data = _ref2.data;
    return client({
      url: "/api/simulador/simular",
      method: "post",
      data: data // 👈 directamente, sin envolver en { data: ... }
    });
  }
  return {
    simular: simular
  };
}