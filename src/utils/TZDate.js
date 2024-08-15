export const startDate = (date) => {
  let startDate = date ? new Date(date) : new Date();
  startDate.setHours(0, 0, 0, 0);

  return startDate.toISOString();
};

export const endDate = (date) => {
  let endDate = date ? new Date(date) : new Date();
  endDate.setHours(23, 59, 59, 999);

  return endDate.toISOString();
};
