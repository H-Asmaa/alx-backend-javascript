/* eslint-disable */
module.exports = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DEVIDE':
      if (b === 0) return 'Error';
      return Math.round(a) / Math.round(b);
  }
};
