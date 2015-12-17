import {expect} from 'chai';

import {getScore, getBest} from '../lib/day15';

describe('Day 15', () => {
  describe('getScore', () => {
    it('can do a simple score', () => {
      expect(getScore(1,1,1,1)).to.equal(3*3*2*2);
    });
    it('returns 0 if a score is negative', () => {
      expect(getScore(1,1,10,1)).to.equal(0);
    });
  });
});