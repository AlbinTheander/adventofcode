import {expect} from 'chai';

import {LightGrid, LightGridV2, parseLightAction} from '../lib/day6';

describe('Day 6', () => {
  describe('LightGrid', () => {

    let lightGrid;

    beforeEach(() => {
      lightGrid = new LightGrid(1000, 1000);
    });

    it('should be able to instantiate', () => {
      expect(lightGrid).to.be.an('object');
    });
    it('should have all lights turned off by default', () => {
      expect(lightGrid.lights).to.equal(0);
    });
    it('should be able to turn on a range of lights', () => {
      lightGrid.turnon(0,5,9,13);
      expect(lightGrid.lights).to.equal(90);
      lightGrid.turnon(1,6,8,12);
      expect(lightGrid.lights).to.equal(90);
      lightGrid.turnon(0,0,5,13);
      expect(lightGrid.lights).to.equal(120);
    });
    it('should be able to toggle a range of lights', () => {
      lightGrid.turnon(0,0,4,4);
      lightGrid.toggle(0,0,9,9);
      expect(lightGrid.lights).to.equal(75);
    });
  });

  describe('LightGridV2', () => {
    var lightGridV2;

    beforeEach(() => {
      lightGridV2 = new LightGridV2(1000, 1000);
    });

    it('should start with a brightness of zero', () => {
      expect(lightGridV2.lights).to.equal(0);
    });
    it('should increase the brightness when turned on', () => {
      lightGridV2.turnon(0,0,5,5);
      expect(lightGridV2.lights).to.equal(36);
    });
  });

  describe('parseLightAction', () => {
    it('should be able to parse an on action', () => {
      var action = parseLightAction('turn on 489,959 through 759,964');
      expect(action).to.eql({
        method: 'turnon',
        x1: 489,
        y1: 959,
        x2: 759,
        y2: 964
      });
    });
  });

});