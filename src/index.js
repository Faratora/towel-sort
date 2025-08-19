module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const line = i % 2 === 0 ? matrix[i] : matrix[i].slice().reverse();
    result.push(...line);
  }
  return result;
};
const matrix = [
  [1, 2],
  [3, 4],
];
