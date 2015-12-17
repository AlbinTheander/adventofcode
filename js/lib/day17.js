import fs from 'fs';

export default function day17() {
  var data = fs.readFileSync('../data/day17.txt', 'utf-8');
  var containers = data.split('\n').filter(s => s.length > 0).map(Number);
  var usedContainers = combinations(150, containers);
  var minUsed = Math.min(...usedContainers);
  var minUsedContainers = usedContainers.filter(used => used === minUsed);
  console.log('******* Day 17 *******')
  console.log('There are', usedContainers.length, 'ways of storing the eggnog');
  console.log('There are', minUsedContainers.length, 'ways of storing it in the minimum number of jars');
  console.log();
}



export function combinations(target, containers, usedContainers = 0) {
  if (target === 0) return [usedContainers];
  if (target < 0) return  [];
  if (containers.length === 0) return [];

  var head = containers[0];
  var rest = containers.slice(1);
  return combinations(target, rest, usedContainers).concat(
         combinations(target-head, rest, usedContainers+1));
}