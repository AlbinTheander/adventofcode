import {expect} from 'chai';

import {getPaper, getRibbon} from '../lib/day2';


describe('Day 2', () => {

	describe('getPaper', () => {

		it('should handle some single box cases', () => {
			expect(getPaper('1x1x1')).to.equal(7);
			expect(getPaper('2x3x4')).to.equal(58);
			expect(getPaper('10x1x1')).to.equal(43);
		});

		it('should handles two boxes', () => {
			expect(getPaper('1x1x1\n2x3x4')).to.equal(7+58);
		});

	});

	describe('getRibbon', () => {

		it('should handle som single box cases', () => {
			expect(getRibbon('1x1x1')).to.equal(5);
			expect(getRibbon('2x3x4')).to.equal(34);
			expect(getRibbon('1x10x1')).to.equal(14);
		});

		it('should handle two boxes', () => {
			expect(getRibbon('2x3x4\n1x10x1')).to.equal(34+14);
		});

	});

});