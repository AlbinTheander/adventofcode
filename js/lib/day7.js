import fs from 'fs';

export default function day7() {
  const fns = fs.readFileSync('../data/day7.txt', 'utf-8');
  const context = new Context();
  fns.split('\n').forEach(fn => context.addFn(new Fn(fn)));
  const originalA = context.getValue('a');

  console.log('******* Day 7 ******');
  console.log('Wire a has the value', originalA);

  context.reset();
  context.addFn(new Fn(`${originalA} -> b`));
  console.log('After rewiring, a has the value', context.getValue('a'));
}



const BINARY_OP = /(\w+) (\w+) (\w+) -> (\w+)/;
const UNARY_OP = /()(\w+) (\w+) -> (\w+)/;
const ASSIGNMENT = /()()(\w+) -> (\w+)/;

export class Context {

  constructor() {
    this.symbols = new Map();
  }

  addFn(fn) {
    this.symbols.set(fn.name, fn);
  }

  getValue(symbol) {
    if (!isNaN(symbol)) return Number(symbol);
    const fn = this.symbols.get(symbol);
    if (!fn) throw Error('Unknown symbol ' + symbol);
    return fn.evaluate(this);
  }

  reset() {
    this.symbols.forEach(symbol => symbol.reset());
  }
}

export class Fn {
  constructor(s) {
    let match = s.match(BINARY_OP);
    if (!match) match = s.match(UNARY_OP);
    if (!match) match = s.match(ASSIGNMENT);
    const [_, left, op, right, name] = match;
    this.left = left;
    this.op = op;
    this.right = right;
    this.name = name;
  }

  evaluate(context) {
    if (this.result !== undefined) return this.result;
    let value;
    switch(this.op) {
      case ''       : value = context.getValue(this.right); break;
      case 'NOT'    : value = ~(context.getValue(this.right)); break;
      case 'OR'     : value = context.getValue(this.left) | context.getValue(this.right); break;
      case 'AND'    : value = context.getValue(this.left) & context.getValue(this.right); break;
      case 'LSHIFT' : value = context.getValue(this.left) << context.getValue(this.right); break;
      case 'RSHIFT' : value = context.getValue(this.left) >> context.getValue(this.right); break;
      default: throw Error('Unknown operator: ' + this.op);
    }
    this.result = value & 0xffff;
    return this.result;
  }

  reset() {
    delete this.result;
  }
}