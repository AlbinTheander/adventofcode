import fs from 'fs';
import {combination} from 'js-combinatorics';
import {sum, product} from './utils';

export default function day24() {
  var packageWeights = fs.readFileSync('../data/day24.txt', 'utf-8')
                        .split('\n').filter(s => s.length > 0).map(Number);
  var threeGroups = getUltimateQuantumEntanglement(packageWeights, 3);
  var fourGroups = getUltimateQuantumEntanglement(packageWeights, 4);

  console.log('******* Day 24 *******');
  console.log('The minimum quantum entanglement is for three compartments is', threeGroups);
  console.log('The minimum quantum entanglement is for four compartments is', fourGroups);
  console.log();
}

function getUltimateQuantumEntanglement(weights, groups) {
  const groupWeight = sum(weights)/groups;
  for(let groupSize = 1; groupSize < weights.length; groupSize++) {
    let possibleGroups = combination(weights, groupSize).filter(group => sum(group) === groupWeight);
    if (possibleGroups.length > 0) 
      return Math.min(...possibleGroups.map(product));
  }
  return 'Santa will not bring you any gifts!';
}