export default function day20() {
  var answer1 = findLowest(problem1, 2000000);
  var answer2 = findLowest(problem2, 2000000);
  console.log('***** Day 20 *****');
  console.log('The first house to get at least 29000000 presents is', answer1);
  console.log('The first house to get at least 29000000 next time is', answer2);
  console.log();
}

function findLowest(f, start) {
  let best = -1;
  let current = f(start);
  while (current > 0) {
    best = current;
    current = f(current-1);
  }
  return best;
}

function problem1(max) {
  var houses = new Array(max);
  for(let i = 0; i < houses.length; i++)
    houses[i] = 0;
  var elf = 1;
  while(true) {
    if (elf >= houses.length) return -1;
    const presents = elf * 10;
    for(let house = elf; house < houses.length; house += elf) {
      houses[house] += presents;
      if (houses[house] >= 29000000) return house;
    }
    elf++;
  }
}

function problem2(max) {
  var houses = new Array(max);
  for(let i = 0; i < houses.length; i++)
    houses[i] = 0;
  var elf = 1;
  while(true) {
    if (elf >= houses.length) return -1;
    const presents = elf * 11;
    for(let i = 0, house = elf; i < 50 && house < houses.length; i++, house += elf) {
      houses[house] += presents;
      if (houses[house] >= 29000000) return house;
    }
    elf++;
  }
}