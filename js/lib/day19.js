import fs from 'fs';

export default function day19() {
  let lines = fs.readFileSync('../data/day19.txt', 'utf-8').split('\n');
  lines.pop();
  var molecule = lines.pop();
  lines.pop();

  let transforms = lines.map(s => s.split(' => '));

  var nrOfPossibleResults = countPossibleResults(molecule, transforms);
  var steps = getMinimumStepsToProduce(molecule, transforms);

  console.log('****** Day 19 ******');
  console.log('There are', nrOfPossibleResults, 'molecules that can be created');
  console.log('The minimum nr of steps to produce Rudolph\'s medicin is', steps);
  console.log();
}

function countPossibleResults(molecule, transforms) {
  let results = transforms.reduce((results, [from, to]) => {
    var i = molecule.indexOf(from);
    while(i >= 0) {
      var result = molecule.slice(0, i) + to + molecule.slice(i+from.length);
      results.add(result);
      i = molecule.indexOf(from, i+1);
    }
    return results;
  }, new Set());
  return results.size;  
}


function getMinimumStepsToProduce(molecule, transforms) {
  transforms = transforms.sort((t1, t2) => t2[1].length - t1[1].length);
  let count = 0;
  let again = true;
  while(again) {
    again = false;
    for(var [to, from] of transforms) {
      let pos = molecule.indexOf(from);
      while(pos >= 0) {
        again = true;
        molecule = molecule.slice(0, pos) + to + molecule.slice(pos+from.length);
        count++;
        pos = molecule.indexOf(from);
      }
    }
  }
  return count;
}