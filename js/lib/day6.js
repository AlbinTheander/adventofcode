import fs from 'fs';

export default function day6() {
  let orders = fs.readFileSync('../data/day6.txt', 'utf-8');
  let actions = orders.split('\n').map(parseLightAction);
  let lightGrid = new LightGrid(1000, 1000);
  let lightGridV2 = new LightGridV2(1000, 1000);
  actions.forEach(({method, x1, y1, x2, y2}) => {
    lightGrid[method](x1, y1, x2, y2);
    lightGridV2[method](x1, y1, x2, y2);
  });
  console.log('**** Day 6 *****');
  console.log('In the end', lightGrid.lights, 'lights are burning.');
  console.log('According to the new instructions, the brightness is', lightGridV2.lights);
  console.log();
}

export function parseLightAction(s) {
  var [_, action, x1, y1, x2, y2] = 
    s.match(/(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/);
  return {
    method: action.replace(' ', ''),
    x1: Number(x1),
    y1: Number(y1),
    x2: Number(x2),
    y2: Number(y2)
  };
}

export class LightGrid {
  constructor(width, height) {
    let grid = Array(...Array(height)).map(() => Array(...Array(width)).map(() => false));
    this.grid = grid;
  }

  turnon(x1, y1, x2, y2) {
    this.set(x1, y1, x2, y2, true);
  }

  turnoff(x1, y1, x2, y2) {
    this.set(x1, y1, x2, y2, false);
  }

  toggle(x1, y1, x2, y2) {
    for(var y = y1; y <= y2; y++)
      for(var x = x1; x <= x2; x++)
        this.grid[y][x] = !this.grid[y][x];
  }

  set(x1, y1, x2, y2, value) {
    for(var y = y1; y <= y2; y++)
      for(var x = x1; x <= x2; x++)
          this.grid[y][x] = value;
  }

  get lights() {
    var count = 0;
    this.grid.forEach(row => row.forEach(cell => cell ? count++ : 0));
    return count;
  }
}

export class LightGridV2 {
  constructor(width, height) {
    let grid = Array(...Array(height)).map(() => Array(...Array(width)).map(() => 0));
    this.grid = grid;
  }

  turnon(x1, y1, x2, y2) {
    this.add(x1, y1, x2, y2, 1);
  }

  turnoff(x1, y1, x2, y2) {
    this.add(x1, y1, x2, y2, -1);
  }

  toggle(x1, y1, x2, y2) {
    this.add(x1, y1, x2, y2, 2);
  }

  add(x1, y1, x2, y2, dv) {
    for(var y = y1; y <= y2; y++)
      for(var x = x1; x <= x2; x++)
        this.grid[y][x] = Math.max(0, this.grid[y][x]+dv);
  }

  get lights() {
    const add = (a,b) => a+b;
    return this.grid.reduce((sum, row) => sum + row.reduce(add, 0), 0);
  }
}