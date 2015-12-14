import {expect} from 'chai';

import {Reindeer} from '../lib/day14';


describe('Day 14', () => {
  describe('Reindeer', () => {
    it('ran 0 km when new', () => {
      let rudolph = new Reindeer('Rudolph', 10, 15, 3);
      expect(rudolph.distance).to.equal(0);
    });
    it('knows how far it ran after 1 second', () => {
      let rudolph = new Reindeer('Rudolph', 10, 15, 3);
      rudolph.tick();
      expect(rudolph.distance).to.equal(10);
    });
    it('stops running when it is time to rest', () => {
      let rudolph = new Reindeer('Rudolph', 10, 3, 2);
      rudolph.tick();
      rudolph.tick();
      rudolph.tick();
      expect(rudolph.distance).to.equal(3 * 10);
      rudolph.tick();
      rudolph.tick();
      expect(rudolph.distance).to.equal(3 * 10);
    });
    it('continues running after resting', () => {
      let rudolph = new Reindeer('Rudolph', 10, 3, 2);
      // Running for 3 seconds
      rudolph.tick(); rudolph.tick(); rudolph.tick();
      // Resting for 2 seconds
      rudolph.tick(); rudolph.tick();
      // Running for 2 more seconds
      rudolph.tick(); rudolph.tick();
      expect(rudolph.distance).to.equal(5 * 10);
    });
    it('can be created from a string', () => {
      let rudolph = Reindeer.from('Rudolph can fly 20 km/s for 7 seconds, but then must rest for 132 seconds.');
      expect(rudolph.name).to.equal('Rudolph');
      expect(rudolph.speed).to.equal(20);
      expect(rudolph.runningTime).to.equal(7);
      expect(rudolph.restingTime).to.equal(132);
    });
    it('handles the examples', () => {
      let comet = Reindeer.from('Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.');
      let dancer = Reindeer.from('Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.');
      for(var i = 0; i < 1000; i++) {
        comet.tick();
        dancer.tick();
      }
      expect(comet.distance).to.equal(1120);
      expect(dancer.distance).to.equal(1056);
    });
  });
});