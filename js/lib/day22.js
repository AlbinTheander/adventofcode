import Queue from 'js-priority-queue';

export default function day22() {
  let endState1 = play(0);
  let endState2 = play(1);

  console.log('******* Day 22 *******');
  console.log('The cheapest winning strategy requires', endState1.spentMana, 'and is', endState1.spells);
  console.log('The same for the hard level requires', endState2.spentMana, 'and is', endState2.spells);
  console.log();
}

function play(level) {
  var spells = [MagicMissile, Drain, Shield, Poison, Recharge];
  var queue = setupGame();
  var state = queue.dequeue();
  while(state && state.bossHealth > 0) {
    applyEffects(state);
    state.playerHealth -= level;
    if (state.playerHealth > 0) {
      for(var spell of spells) {
        var newState = spell(state);
        if (newState) {
          if (newState.bossHealth > 0) {
            applyEffects(newState);
            newState.playerHealth -= Math.max(8-newState.playerArmor, 1);
          }
          if (newState.playerHealth > 0) {
            queue.queue(newState);
          }
        }
      }
    }
    state = queue.length > 0 ? queue.dequeue() : null;
  }
  return state;
}

function applyEffects(state) {
  var newEffects = [];
  for(var effect of state.effects) {
    var newEffect = effect.apply(state);
    if (newEffect) newEffects.push(newEffect);
  }
  state.effects = newEffects;
}

function setupGame() {
  var queue = new Queue({comparator: (a,b) => a.spentMana - b.spentMana });
  var defaultState = {
    playerHealth: 50,
    playerArmor: 0,
    playerMana:  500,
    spentMana: 0,
    bossHealth: 55,
    effects: [],
    spells: []
  };
  queue.queue(defaultState);
  return queue;
}

function MagicMissile(state) {
  if (state.playerMana < 53) return null;
  return {
    playerHealth: state.playerHealth,
    playerArmor: state.playerArmor,
    playerMana: state.playerMana-53,
    spentMana: state.spentMana+53,
    bossHealth: state.bossHealth-4,
    effects: state.effects,
    spells: state.spells.concat('Magic Missile')
  };
}

function Drain(state) {
  if (state.playerMana < 73) return null;
  return {
    playerHealth: state.playerHealth+2,
    playerArmor: state.playerArmor,
    playerMana: state.playerMana-73,
    spentMana: state.spentMana+73,
    bossHealth: state.bossHealth-2,
    effects: state.effects,
    spells: state.spells.concat('Drain')
  };
}

function Shield(state) {
  if (state.playerMana < 113) return null;
  if (state.effects.some(effect => effect.name==='Shield')) return null;
  return {
    playerHealth: state.playerHealth,
    playerArmor: state.playerArmor,
    playerMana: state.playerMana-113,
    spentMana: state.spentMana+113,
    bossHealth: state.bossHealth,
    effects: state.effects.concat(new ShieldEffect()),
    spells: state.spells.concat('Shield')
  };
}

function ShieldEffect(timeLeft = 5) {
  this.name = 'Shield';
  this.apply = function(state) {
    if (timeLeft === 5) state.playerArmor += 7;
    if (timeLeft === 0) state.playerArmor -= 7;
    return timeLeft === 0 ? null : new ShieldEffect(timeLeft-1);
  };
}

function Poison(state) {
  if (state.playerMana < 173) return null;
  if (state.effects.some(effect => effect.name==='Poison')) return null;
  return {
    playerHealth: state.playerHealth,
    playerArmor: state.playerArmor,
    playerMana: state.playerMana-173,
    spentMana: state.spentMana+173,
    bossHealth: state.bossHealth,
    effects: state.effects.concat(new PoisonEffect()),
    spells: state.spells.concat('Poison')
  };
}

function PoisonEffect(timeLeft = 5) {
  this.name = 'Poison';
  this.apply = function(state) {
    state.bossHealth -= 3;
    return timeLeft === 0 ? null : new PoisonEffect(timeLeft-1);
  };
}

function Recharge(state) {
  if (state.playerMana < 229) return null;
  if (state.effects.some(effect => effect.name==='Recharge')) return null;
  return {
    playerHealth: state.playerHealth,
    playerArmor: state.playerArmor,
    playerMana: state.playerMana-229,
    spentMana: state.spentMana+229,
    bossHealth: state.bossHealth,
    effects: state.effects.concat(new RechargeEffect()),
    spells: state.spells.concat('Recharge')
  };
}

function RechargeEffect(timeLeft = 4) {
  this.name = 'Recharge';
  this.apply = function(state) {
    state.playerMana += 101;
    return timeLeft === 0 ? null : new RechargeEffect(timeLeft-1);
  };
}

