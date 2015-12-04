import { expect } from 'chai';

import { countHouses } from '../lib/day3';


describe('Day 3', () => {

  describe('countHouses with one santa', () => {

    it('will find two houses after one step', () => {
      expect(countHouses('>')).to.equal(2);
    });

    it('will find houses when going right', () => {
      expect(countHouses('>>>')).to.equal(4);
    });

    it('will find houses when going left', () => {
      expect(countHouses('<<<')).to.equal(4);
    });

    it('will find houses when going up', () => {
      expect(countHouses('^^^^')).to.equal(5);
    });

    it('will find houses when going down', () => {
      expect(countHouses('vvvv')).to.equal(5);
    });

    it('will only count houses once', () => {
      expect(countHouses('<><><><><>')).to.equal(2);
    });

    it('can follow a path', () => {
      expect(countHouses('^>v<')).to.equal(4);
    });

  });

  describe('countHouses with two santas', () => {

    it('can handle Santas going in different directions', () => {
      expect(countHouses('<>', 2)).to.equal(3);
    });

    it('can handle santas stepping on each others\' toes', () => {
    	expect(countHouses('<<>><<>>',2)).to.equal(2);
    });

  });
});
