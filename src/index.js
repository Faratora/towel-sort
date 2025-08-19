module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let res;
    if (i % 2 === 0) {
      res = matrix[i];
    } else {
      res = matrix[i].slice().reverse();
    }
    result.push(...res);
  }
  return result;
};
