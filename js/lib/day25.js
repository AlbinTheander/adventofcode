
export default function day25() {
  console.log('****** Day 25 ******');
  console.log('The code at row 2947 and column 3029 is', getCell(2947, 3029));
  console.log('Merry Christmas!!!');
}

export function getCell(targetRow, targetCol) {
  var row = 1, col = 1;
  var value = 20151125;
  while(row != targetRow || col !== targetCol) {
    row -= 1;
    col += 1;
    if (row === 0) {
      row = col;
      col = 1;
    }
    value = value * 252533 % 33554393;
  }
  return value;
}