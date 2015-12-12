import {expect} from 'chai';

import {findNumbers, sumAll} from '../lib/day12';

describe.only('Day 12', () => {
  describe('findNumbers', () => {
    it('returns an empty array if there are no numbers', () => {
      expect(findNumbers('albin')).to.eql([]);      
    });
    it('can find one number', () => {
      expect(findNumbers('al342')).to.eql([342]);
    });
    it('can find negative numbers', () => {
      expect(findNumbers('er:-32,15')).to.eql([-32,15]);
    });
  });

  describe('sumAll', () => {
    it('sums a single number', () => {
      expect(sumAll(4)).to.equal(4);
    });
    it('returns 0 for a string', () => {
      expect(sumAll('albin')).to.equal(0);
    });
    it('return 0 for null and undefined', () => {
      expect(sumAll(null)).to.equal(0);
      expect(sumAll()).to.equal(0);
    });
    it('sums numbers in an array', () => {
      expect(sumAll([1,2,3,'albin',4])).to.equal(10);
    });
    it('sumAlls values in an object', () => {
      expect(sumAll({a:1, b:2, c:'albin', d:3})).to.equal(6);
    });
    it('ignores objects with a red value', () => {
      expect(sumAll({a:1, b:2, c:'red', d:3})).to.equal(0);
    });
  });
});