import {expect} from 'chai';

import {getCell} from '../lib/day25';

describe('Day 25', () => {
  describe('getCell', () => {
    it('can get 1,1', () => {
      expect(getCell(1,1)).to.equal(20151125);
    });
    it('can get 2,1', () => {
      expect(getCell(2,1)).to.equal(31916031);
    });
    it('can get other values', () => {
      expect(getCell(4,3)).to.equal(21345942);
      expect(getCell(6,6)).to.equal(27995004);
    });
    it('can get the target value', () => {
      expect(getCell(2947, 3029)).to.equal(19980801);
    });
  });
});