const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', function(){
	it('...', function(){
		assert.equal(calculateNumber(1, 3), 4);
	});
	it('...', function(){
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it('...', function(){
		assert.equal(calculateNumber(1.2, 3.7), 5);
	});
	it('...', function(){
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
	it('...', function(){
		assert.equal(calculateNumber(11.4, 0), 11);
	});
	it('...', function(){
		assert.equal(calculateNumber(0, 6.5), 7);
	});
	it('...', function(){
		assert.equal(calculateNumber(3.7), NaN);
	});
	it('...', function(){
		assert.equal(calculateNumber(), NaN);
	});
});



