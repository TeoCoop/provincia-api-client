function simuladorFondos({ client }) {
  function simular({ data }) {
    return client({
      url: "/api/simulador-fondos/simular",
      method: "post",
      data, // 👈 directamente, sin envolver en { data: ... }
    });
  }
  return {
    simular,
  };
}
module.exports = simuladorFondos;
