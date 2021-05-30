module.exports = {
  remainingDays(job) {
    // cálculo de tempo restante (dias que faltam para entregar o projeto)
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();
    // transformar milissegundos em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    // diferença da data inicial para a data de entrega em dias arredondado para baixo
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);

    // restam x dias
    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"],
};
