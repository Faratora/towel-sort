module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const array = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      array.push(matrix[i].slice());
    } else {
      array.push(matrix[i].slice().reverse());
    }
}
  return array;
}

const matrix = [
  [1, 2],
  [3, 4],
];
