import {expect} from  'chai';

import {getDecodedLengthDiff, getEncodedLengthDiff} from '../lib/day8';

describe('Day 8', () => {
  describe('getDecodedLengthDiff', () => {
    it('can get diff of simple string', () => {
      expect(getDecodedLengthDiff('"albin"')).to.equal(2);
    });
    it('can get diff of string with escapes', () => {
      expect(getDecodedLengthDiff('"\\\\ \\xbc \\""')).to.equal(7);
    });
  });

  describe('getEncodedLengthDiff', () => {
    it('can get diff of simple string', () => {
      expect(getEncodedLengthDiff("albin")).to.equal(2);
    });
    it('can get diff of string with escapes', () => {
      expect(getEncodedLengthDiff('"\\ \\xbc \\""')).to.equal(8);
    });
  });
});