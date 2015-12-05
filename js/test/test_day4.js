import {expect} from 'chai';

import {findKey} from '../lib/day4';


describe('Day 4', () => {

	describe.skip('findKey', () => {
		it('can find the key for "abcdef"', () => {
			expect(findKey('abcdef')).to.equal(609043);
		});

		it('can find the key for "pqrstuv"', function(){
			this.timeout(10000);
			expect(findKey('pqrstuv')).to.equal(1048970);
		});
	});

});