export default function day21() {
  let won = false;
  let equipments = EQUIPMENTS.sort((i1, i2) => i1.cost - i2.cost);

  let equipment;
  for(equipment of equipments) {
    if (willDefeatBoss(equipment)) break;
  }
  let cheapestWin = equipment;

  equipments = EQUIPMENTS.reverse();
  for(equipment of equipments) {
    if (!willDefeatBoss(equipment)) break;
  }
  let costliestLose = equipment;

  console.log('***** Day 21 ******');
  console.log('The cheapest equipment that will beat the boss is', cheapestWin);
  console.log('The most expensive equpment that will lose is', costliestLose);
  console.log();
}


const WEAPONS = [
  {name: 'Dagger',        cost: 8,     damage: 4,       armor: 0},
  {name: 'Shortsword',   cost: 10,     damage: 5,       armor: 0},
  {name: 'Warhammer',    cost: 25,     damage: 6,       armor: 0},
  {name: 'Longsword',    cost: 40,     damage: 7,       armor: 0},
  {name: 'Greataxe',     cost: 74,     damage: 8,       armor: 0}];

const ARMORS = [
  {name: 'Naked',        cost: 0,      damage: 0,       armor: 0},
  {name: 'Leather',      cost: 13,     damage: 0,       armor: 1},
  {name: 'Chainmail',    cost: 31,     damage: 0,       armor: 2},
  {name: 'Splintmail',   cost: 53,     damage: 0,       armor: 3},
  {name: 'Bandedmail',   cost: 75,     damage: 0,       armor: 4},
  {name: 'Platemail',   cost: 102,     damage: 0,       armor: 5}];

const RINGS = [
  {name: 'Damage +1',    cost: 25,     damage: 1,       armor: 0},
  {name: 'Damage +2',    cost: 50,     damage: 2,       armor: 0},
  {name: 'Damage +3',   cost: 100,     damage: 3,       armor: 0},
  {name: 'Defense +1',   cost: 20,     damage: 0,       armor: 1},
  {name: 'Defense +2',   cost: 40,     damage: 0,       armor: 2},
  {name: 'Defense +3',   cost: 80,     damage: 0,       armor: 3}];

// contains all variations of equipment, sorted by cost
const EQUIPMENTS = (function() {
  var equipments = [];
  for(var weapon of WEAPONS)
    for(var armor of ARMORS) {
      equipments.push([weapon, armor]);
      for(var r1 = 0; r1 < RINGS.length; r1++) {
        equipments.push([weapon, armor, RINGS[r1]]);
        for(var r2 = r1+1; r2 < RINGS.length; r2++) {
          equipments.push([weapon, armor, RINGS[r1], RINGS[r2]]);
        }
      }
    }
  const ADD = (a,b) => a+b;
  return equipments.map(items => ({
    items: items.map(item => item.name).join(','),
    cost: items.map(item => item.cost).reduce(ADD, 0),
    damage: items.map(item => item.damage).reduce(ADD, 0),
    armor: items.map(item => item.armor).reduce(ADD, 0)
  }));
})();

export class Player {
  constructor(damage, armor, health) {
    this.damage = damage;
    this.armor = armor;
    this.health = health;
  }
}

function willDefeatBoss(equipment) {
  var player = new Player(equipment.damage, equipment.armor, 100);
  var boss = new Player(8, 2, 109);
  return isBetter(player, boss);
}

function isBetter(player1, player2) {
  while(true) {
    let damage = Math.max(1, player1.damage - player2.armor);
    player2.health -= damage;
    if (player2.health <= 0) return true;
    damage = Math.max(1, player2.damage - player1.armor);
    player1.health -= damage;
    if (player1.health <= 0) return false;
  }
}
