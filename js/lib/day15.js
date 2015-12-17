const costs = [
  [4, -2, 0, 0, 5],
  [0, 5, -1, 0, 8],
  [-1, 0, 5, 0, 6],
  [0, 0, -2, 2, 2]];

const Frosting = {
  capacity: 4,
  durability: -2,
  flavor: 0,
  texture: 0,
  calories: 5
};
const Candy = {
  capacity: 0,
  durability: 5,
  flavor: -1,
  texture: 0,
  calories: 8
};
const Butterscotch = {
  capacity: -1,
  durability: 0,
  flavor: 5,
  texture: 0,
  calories: 6
};
const Sugar = {
  capacity: 0,
  durability: 0,
  flavor: -2,
  texture: 2,
  calories: 1
};

const Ingredients = [Frosting, Candy, Butterscotch, Sugar];
const Properties = ['capacity', 'durability', 'flavor', 'texture'];

export default function day15() {
  console.log('******* Day 15 *******');
  console.log('The ultimate score is', getBest());
  console.log('The ultimate 500-calories score is', getBest2());
  console.log();
}

export function getScore(...amounts) {
  var total = 1;
  for(
  let property of Properties) {
  var propScore = 0;
  for (let i = 0; i < Ingredients.length; i++) {
    propScore += amounts[i] * Ingredients[i][property];
  }
  if (propScore <= 0) return 0;
  total *= propScore;
  }
  return total;
}

export function getBest() {
  var best = 0;
  for (var f = 0; f <= 100; f++)
    for (var c = 0; c <= 100 - f; c++)
      for (var b = 0; b <= 100 - f - c; b++) {
        var s = 100 - b - c - f;
        var score = getScore(f, c, b, s);
        if (score > best) {
          best = score;
        }
  }
  return best;
}

export function getBest2() {
  var best = 0;
  for (var f = 0; f <= 100; f++)
    for (var c = 0; c <= 100 - f; c++)
      for (var b = 0; b <= 100 - f - c; b++) {
        var s = 100 - b - c - f;
        if (5 * f + 8 * c + 6 * b + s === 500) {
          var score = getScore(f, c, b, s);
          if (score > best) {
            best = score;
          }
        }
  }
  return best;
}