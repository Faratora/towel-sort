const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// module.exports =
function towelSort(matrix) {
  const array = [];

  for (let i = 0; i < matrix.length; i++) {
    console.log(i);

    if (i % 2 === 0) {
      array.push(matrix[i]);
    } else {
      array.push(matrix[i].reverse());
    }
  }
  return array;
}
// Пример использования
console.log(towelSort(matrix)); // [1, 2, 3, 6, 5, 4, 7, 8, 9]
