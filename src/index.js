module.exports = function towelSort(matrix) {
  const array = [];

  for (let i = 0; i < matrix.length; i + 1) {
    if (i % 2 === 0) {
      array.push(matrix[i]);
    } else {
      array.push(matrix[i].reverse());
    }
  }
  return array.flat();
};
