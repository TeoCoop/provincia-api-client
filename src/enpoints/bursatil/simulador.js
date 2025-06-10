function simuladorRendimiento({ client }) {
  function simular({ data }) {
    const formattedData = {
      data: {
        ...data,
      },
    };
    return client({
      url: "/api/simulador/simular",
      method: "post",
      data: formattedData,
    });
  }
  return {
    simular,
  };
}
module.exports = simuladorRendimiento;
