module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const array = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let result;
    if (i % 2 === 0) {
      result = matrix[i];
    } else {
      result = matrix[i].slice().reverse();
    }
    array.push(result);
}
  return array;
}
