import {finalFloor, firstTimeInBasement} from '../lib/day1';
import {expect} from 'chai';


describe('Day 1', () => {

	describe('finalFloor', () => {

		it('should handle some simple examples', () => {
			expect(finalFloor('((')).to.equal(2);
			expect(finalFloor('))')).to.equal(-2);
			expect(finalFloor('()()(')).to.equal(1);
		});
	});

	describe('firstTimeInBasement', () => {
		it('should handle some simple cases', () => {
			expect(firstTimeInBasement('))')).to.equal(1);
			expect(firstTimeInBasement('()())')).to.equal(5);
		});
	});

});