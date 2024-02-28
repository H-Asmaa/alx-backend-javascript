const calculateNumber = require("./0-calcul");
const assert = require('assert');

/* eslint-disable */
describe('calculateNumber', () => {
	it('Testing normal cases...', function(){
		assert.equal(calculateNumber(1, 3), 4);
		assert.equal(calculateNumber(1, 3.7), 5);
		assert.equal(calculateNumber(1.2, 3.7), 5);
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
	it('Testing pairs...', () => {
		assert.equal(calculateNumber(11.4, 0), 11);
		assert.equal(calculateNumber(0, 6.5), 7);
	})
	it('Testing odd cases...', () => {
		assert.equal(calculateNumber(3.7), NaN);
		assert.equal(calculateNumber(), NaN);
	});
	it('Testing negatives...', () => {
		assert.equal(calculateNumber(3, -7), -4);
		assert.equal(calculateNumber(-1, 2), 1);
	});
});
/* eslint-disable */


