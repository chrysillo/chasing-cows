export function countHerds(field: number[][]) { // this is 3rd party code
  const herds = [];
  const cowPos = new Set();

  // looking for cows
  for (let rowIndex = 0; rowIndex < field.length; rowIndex++) {
    for (let colIndex = 0; colIndex < field[rowIndex].length; colIndex++) {
      // if cow has been accounted as part of another heard, move on
      if (cowPos.has(`${rowIndex}_${colIndex}`)) continue;

      const herd = getHerd(rowIndex, colIndex);

      if (herd) {
        herds.push(herd);
      }
    }
  }

  function getHerd(x: number, y: number, currentHerd: string[] = []) {
    // if position is out of bounds of the field - bail
    if (x < 0 || y < 0 || x > field.length - 1 || x > field.length - 1) {
      return;
    }

    // if pos is not a cow or it already has been accounted for, move along
    if (field[x][y] != 1 || cowPos.has(`${x}_${y}`)) return;

    cowPos.add(`${x}_${y}`);
    currentHerd.push(`${x}_${y}`);
    getHerd(x, y + 1, currentHerd);
    getHerd(x, y - 1, currentHerd);
    getHerd(x - 1, y, currentHerd);
    getHerd(x + 1, y, currentHerd);

    return currentHerd;
  }

  return { cows: cowPos.size, herds: herds.length };
}

function generateRandomField() {
  const randomCow = () => Math.round(Math.random());
  return new Array(5)
    .fill(0)
    .map(() => new Array(5).fill(0).map(() => randomCow()));
}

export function generateNewField() {
  const field = generateRandomField();
  const { cows, herds } = countHerds(field);

  return { field, cows, herds };
}
