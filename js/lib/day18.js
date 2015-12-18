import fs from 'fs';

export default function day18() {
  let data = fs.readFileSync('../data/day18.txt', 'utf-8');

  let grid = new Grid(data);
  for(let i = 0; i < 100; i++)
    grid = animate(grid);
  var lightsOn1 = countLights(grid);

  grid = new Grid(data);
  grid.on(0,0)
        .on(0, grid.height-1)
        .on(grid.width-1, 0)
        .on(grid.width-1, grid.height-1);
  for(let i = 0; i < 100; i++) {
    grid = animate(grid);
    grid.on(0,0)
        .on(0, grid.height-1)
        .on(grid.width-1, 0)
        .on(grid.width-1, grid.height-1);
  }
  var lightsOn2 = countLights(grid);

  console.log('******* Day 18 *******');
  console.log('There are', lightsOn1, 'lights on.');
  console.log('With the broken lights, there are ', lightsOn2, 'lights on');
  console.log();
}

function countLights(grid) {
  let count = 0;
  grid.forEach(on => on ? count++ : 0);
  return count;
}

export function animate(grid) {
  var next = new Grid(grid.width, grid.height);
  grid.forEach((on, x, y) => {
    let neighbours = grid.neighbours(x,y);
    if (on && (neighbours === 2 || neighbours == 3))
      next.on(x,y);
    else if (!on && neighbours === 3)
      next.on(x,y);
    else
      next.off(x,y);
  });
  return next;
}

export function Grid(width, height) {

  let initialData = (height === undefined) ? width.split('\n') : undefined;
  width = initialData ? initialData[0].length : width;
  height = initialData ? initialData.length : height;
  let data = Array(width).fill(0, 0, width).map(_ => []);

  var grid = function(x, y) {
    return x >= 0 && x < width && 
           y >= 0 && y < height &&
           data[x][y] === true;
  };

  grid.width = width;
  grid.height = height;

  grid.on = (x, y) => (data[x][y] = true, grid);
  grid.off = (x, y) => (data[x][y] = false, grid);

  grid.neighbours = function(x, y) {
    var count = 0;
    for(var xi = x-1; xi <= x+1; xi++)
      for(var yi = y-1; yi <= y+1; yi++)
        if ((xi !== x || yi !== y) && grid(xi, yi))
          count++;
    return count;
  };

  grid.forEach = function(f) {
    for(var x = 0; x < width; x++)
      for(var y = 0; y < height; y++)
        f(data[x][y], x, y, grid);
  };

  if (initialData) {
    grid.forEach((_, x, y) => initialData[y][x] === '#' ? grid.on(x,y) : grid.off(x,y));
  }

  return grid;
}