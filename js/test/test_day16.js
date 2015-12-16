import {expect} from 'chai';

import {match, Auntie} from '../lib/day16';

describe('Day 16', ()=> {
  describe('match', () => {
    it('matches everything without restrictions', () => {
      var matcher = match();
      expect(matcher({children: 5})).to.equal(true);
    });
    it('can match exact properties', () => {
      var predicate = match().exactly(3, 'children');
      expect(predicate({children: 3})).to.equal(true);
      expect(predicate({children: 5})).to.equal(false);
      expect(predicate({bananas: 2})).to.equal(true);
    });
    it('can match lessThan properties', () => {
      var predicate = match().lessThan(3, 'children');
      expect(predicate({children: 2})).to.equal(true);
      expect(predicate({children: 3})).to.equal(false);
      expect(predicate({children: 5})).to.equal(false);
    });
    it('can match moreThan properties', () => {
      var predicate = match().moreThan(3, 'children');
      expect(predicate({children: 2})).to.equal(false);
      expect(predicate({children: 3})).to.equal(false);
      expect(predicate({children: 5})).to.equal(true);
    });
    it('can chain restrictions', () => {
      var predicate = match().exactly(3, 'children')
                             .lessThan(2, 'eggs')
                             .moreThan(3, 'bananas');

      expect(predicate({children: 3, eggs: 1})).to.equal(true);
      expect(predicate({children: 3, bananas: 3})).to.equal(false);
    });
  });

  describe('Auntie', () => {
    it('can parse an auntie-string', () => {
      var auntie = new Auntie('Sue 469: children: 2, perfumes: 2, pomeranians: 4');
      expect(auntie).to.eql({
        name: 'Sue 469',
        children: 2,
        perfumes: 2,
        pomeranians: 4
      });
    });
  });
});