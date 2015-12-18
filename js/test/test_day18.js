import {expect} from 'chai';

import {Grid, animate} from '../lib/day18';

const exampleGrid = ['.#.#.#',
                     '...##.',
                     '#....#',
                     '..#...',
                     '#.#..#',
                     '####..'].join('\n');
const iteration1 = ['..##..',
                    '..##.#',
                    '...##.',
                    '......',
                    '#.....',
                    '#.##..'].join('\n');



describe('Day 18', () => {
  describe('Grid', () => {
    it('has everything turned off from start', () => {
      let grid = new Grid(10, 10);
      expect(grid(1, 1)).to.equal(false);
    });
    it('sees everyting outside of the grid as off', () => {
      let grid = new Grid(10, 10);
      expect(grid(100, 5)).to.equal(false);
      expect(grid(5, 100)).to.equal(false);
      expect(grid(-1, 5)).to.equal(false);
      expect(grid(5, -1)).to.equal(false);
    });
    it('can turn lights on and off', () => {
      let grid = new Grid(10, 10);
      grid.on(2, 2);
      expect(grid(2,2)).to.equal(true);
      grid.off(2, 2);
      expect(grid(2,2)).to.equal(false);
    });
    it('can can count turned on neighbours', () => {
      let grid = new Grid(10, 10);
      expect(grid.neighbours(5,5)).to.equal(0);
      grid.on(4,4).on(4,5);
      expect(grid.neighbours(5,5)).to.equal(2);
      grid.on(5,5);
      expect(grid.neighbours(5,5)).to.equal(2);
    });
    it('can be created from a string', () => {
      let grid = new Grid(exampleGrid);
      expect(grid(0,0)).to.equal(false);
      expect(grid(1,0)).to.equal(true);
    });
  });

  describe('animate', () => {
    it('can animate', () => {
      let grid = new Grid(exampleGrid);
      expect(equalGrids(animate(grid), new Grid(iteration1))).to.equal(true);
    });
  });
});


function equalGrids(grid1, grid2) {
  if (grid1.width !== grid2.width || grid1.height !== grid2.height)
    return false;
  for(var x = 0; x < grid1.width; x++)
    for(var y = 0; y < grid1.height; y++)
      if (grid1(x,y) !== grid2(x,y))
        return false;
  return true;
}