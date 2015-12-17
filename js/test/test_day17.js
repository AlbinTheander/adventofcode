import {expect} from 'chai';

import {combinations} from '../lib/day17';


describe.only('Day 17', () => {
  describe('combinations', () => {
    it('finds one combination of creating 0', () => {
      expect(combinations(0, [])).to.eql([0]);
      expect(combinations(0, [1,2,3])).to.eql([0]);
    });
    it('finds 0 ways of creating a negative number', () => {
      expect(combinations(-1, [])).to.eql([]);
      expect(combinations(-5, [1,2,3])).to.eql([]);
    });
    it('finds 0 ways of when ran out of choices', () => {
      expect(combinations(1, [])).to.eql([]);
    });
    it('finds a way when there is one container', () => {
      expect(combinations(5, [5])).to.eql([1]);
      expect(combinations(4, [5])).to.eql([]);
      expect(combinations(6, [5])).to.eql([]);
    });
    it('solves the example', () => {
      expect(combinations(25, [20, 15, 10, 5, 5])).to.eql([3,2,2,2]);
    });
  });
});