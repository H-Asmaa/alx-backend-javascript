const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

/* eslint-disable */
describe('calculateNumber', () => {
  it('Testing normal cases...', () => {
	expect(calculateNumber('SUM', 1, 3)).equal(4);
    expect(calculateNumber('SUM', 1, 3)).equal(4);
    expect(calculateNumber('SUBTRACT', 5, 3.7)).equal(1);
    expect(calculateNumber('DIVIDE', 8.2, 3.7)).equal(2);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).equal(0.2);
  });
  it('Testing devision on zero...', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).equal('Error');
  });
  it('Testing odds...', () => {
    expect(calculateNumber('SUM', Math.E, Math.PI)).equal(6);
    expect(calculateNumber('SUBTRACT', Math.E, Math.PI)).equal(0);
    expect(calculateNumber('DIVIDE', Math.E, Math.PI)).equal(1);
  });
  it('Testing negatives...', () => {
    expect(calculateNumber('SUM', -1, 3)).equal(2);
    expect(calculateNumber('SUBTRACT', 5, -3.7)).equal(9);
  });
});
/* eslint-disable */
