function simuladorRendimiento({ client }) {
  function simular({ data }) {
    return client({
      url: "/api/simulador/simular",
      method: "post",
      data, // 👈 directamente, sin envolver en { data: ... }
    });
  }
  return {
    simular,
  };
}
module.exports = simuladorRendimiento;
