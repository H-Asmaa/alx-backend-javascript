#!/usr/bin/node
const getCurrentYear = () => new Date().getFullYear();

export default (income, gdp, capita) => {
  const getYear = getCurrentYear();
  const budget = {
    [`income-${getYear}`]: income,
    [`gdp-${getYear}`]: gdp,
    [`capita-${getYear}`]: capita,
  };
  return budget;
};
