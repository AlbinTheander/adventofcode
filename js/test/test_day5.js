import {expect} from 'chai';

import {isNice, isNicer} from '../lib/day5';

describe('Day 5', () => {

  describe('isNice', () => {
    it('thinks some strings are nice', () => {
      expect(isNice('ugknbfddgicrmopn')).to.equal(true);
      expect(isNice('aaa')).to.equal(true);
    });
    it('return false if there are no double letters', () => {
      expect(isNice('abcdefghi')).to.equal(false);
    });
    it('returns false for less than three vowels', () => {
      expect(isNice('aabcd')).to.equal(false);
      expect(isNice('abbcd')).to.equal(false);
    });
    it('returns false if there are any naughty substrings', () => {
      expect(isNice('aaab')).to.equal(false);
      expect(isNice('aaapq')).to.equal(false);
      expect(isNice('aaacd')).to.equal(false);
      expect(isNice('aaaxy')).to.equal(false);
    });
  });

  describe('isNicer', () => {
    it('things some strings are nice', () => {
      expect(isNicer('qjhvhtzxzqqjkmpb')).to.equal(true);
      expect(isNicer('xxyxx')).to.equal(true);
    });
    it('thinks strings without a repeated letter with one between are naughty', () => {
      expect(isNicer('uurcxstgmygtbstg')).equal(false);
    });
    it('thingks strings without a repeated pair are naughty', () => {
      expect(isNicer('ieodomkazucvgmuy')).to.equal(false);
    });
  });

});