const merge = (left, right) => {

  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right]

}

const mergeSort = (array) => {

  let half = Math.floor((array.length) / 2);
  // Base case or terminating case
  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left), mergeSort(array))
}

const countingSort = (arr, min, max) => {
  const count = {};
  // First populate the count object
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }

  // Then, iterate over count's properties from min to max:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  return sortedArr;
};

function maximoMesas(n, T) {

  /* let llegada = mergeSort(T.map(t => t[0]))
  let salida = mergeSort(T.map(t => t[1])) */

  let llegada = countingSort(T.map(t => t[0]), 0, 100000);
  let salida = countingSort(T.map(t => t[1]), 0, 100000);

  console.log("llegada", llegada)
  console.log("salida", salida)

  let maximoMesas = 0;
  let numeroMesas = 0;
  let indiceLlegada = 0;
  let indiceSalida = 0;

  while (indiceLlegada < n && indiceSalida < n) {
    if (llegada[indiceLlegada] < salida[indiceSalida]) {
      // Un grupo entra al restaurante
      numeroMesas++;
      indiceLlegada++;
    } else {
      // Un grupo se va del restaurante
      numeroMesas--;
      indiceSalida++;
    }
    maximoMesas = Math.max(maximoMesas, numeroMesas);
  }
  return maximoMesas;
}

// Ejemplos de prueba
// console.log(maximoMesas(3, [[5, 8], [2, 4], [3, 9]])); // Debería imprimir 2
// console.log(maximoMesas(4, [[1, 10], [1, 3], [2, 5], [4, 7]])); // Debería imprimir 3
// console.log(maximoMesas(4, [[1, 6], [1, 3], [2, 5], [4, 7]])); // Debería imprimir 3
console.log(maximoMesas(4, [[1, 10], [1, 7], [2, 5], [4, 7]])); // Debería imprimir 3
/* console.log(maximoMesas(4, [[1, 3], [2, 4], [2, 5], [6, 8]])); // Debería imprimir 3
console.log(maximoMesas(1, [[1, 3]])); // Debería imprimir 1
console.log(maximoMesas(2, [[1, 3], [2, 5]])); // Debería imprimir 2
console.log(maximoMesas(5, [[1, 3], [2, 5], [2, 7], [5, 8], [7, 10]])); // Debería imprimir 3
console.log(maximoMesas(3, [[0, 3], [0, 2], [0, 4]])); // Debería imprimir 3
console.log(maximoMesas(3, [[0, 0], [0, 0], [0, 0]])); // Debería imprimir 0
console.log(maximoMesas(3, [[1, 0], [0, 0], [0, 0]])); // Debería imprimir 0
console.log(maximoMesas(5, [[1, 3], [0, 0], [0, 0], [0, 0], [0, 0]]));//Debería imprimir 1
console.log(maximoMesas(1, [[10, 10]])); // Debería imprimir 0
console.log(maximoMesas(1, [[2, 2]])) // Debería imprimir 0 
console.log(maximoMesas(0, [[]]));// Debería imprimir 0
console.log(maximoMesas(4, [[11, 11], [12, 12], [9, 9], [13, 13]]))//Debería imprimir 0
console.log(maximoMesas(3, [[10, 11], [10, 12], [10, 13]])) // Debería imprimir 3  */
