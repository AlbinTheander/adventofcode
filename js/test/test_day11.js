import {expect} from 'chai';

import {nextPw, isValidPw} from '../lib/day11';


describe('Day 11', () => {

  describe('nextPw', () => {
    it('can find the next pw', function() {
      expect(nextPw('abcdefgh')).to.equal('abcdffaa');
      //expect(nextPw('ghijklmn')).to.equal('ghjaabcc'); // <-- takes 14s
    });
  });

  describe('isValidPw', () => {
    it('can decide if a password is valid', () => {
      expect(isValidPw('aabbcdef')).to.equal(true);
      expect(isValidPw('aabcdefg')).to.equal(false);
      expect(isValidPw('abcdefgh')).to.equal(false);
      expect(isValidPw('aabbddgg')).to.equal(false);
      expect(isValidPw('ghjaabcc')).to.equal(true);
    });
  });
});