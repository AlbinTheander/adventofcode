import fs from 'fs';

export default function day23() {
  let program = readProgram();
  let endState1 = execute(program, {a: 0, b: 0});
  let endState2 = execute(program, {a: 1, b: 0});
  console.log('******* Day 23 *******');
  console.log('Register b ends up with the value', endState1.b);
  console.log('If we change the start value of register a to 1, b becomes', endState2.b);
  console.log();
}


function readProgram() {
  return fs.readFileSync('../data/day23.txt', 'utf-8').split('\n');
}


function execute(program, startState) {
  let cpu = startState;
  let pc = 0;
  let even = x => x % 2 === 0;
  while(program[pc] && program[pc].length > 0) {
    let instr = program[pc].split(/,?\s/g);
    switch(instr[0]) {
      case 'hlf': cpu[instr[1]] >>>= 1; break;
      case 'tpl': cpu[instr[1]] *= 3; break;
      case 'inc': cpu[instr[1]] += 1; break;
      case 'jmp': pc += Number(instr[1])-1; break;
      case 'jie': if (even(cpu[instr[1]])) pc += Number(instr[2])-1; break;
      case 'jio': if (cpu[instr[1]] === 1) pc += Number(instr[2])-1; break;
      default: throw Error('unknown instruction', instr);
    }
    if (cpu.a < 0) throw Error('minus' + JSON.stringify(instr));
    pc++;
  }
  return cpu;
}