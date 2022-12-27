

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

const alquiler = (m, n, k, M = [], N = []) => {

    let personasQuePuedenArrendar = 0;

    const ordenadoM = mergeSort(M);
    const ordenadoN = mergeSort(N);

    let iterarM = 0;
    let iterarN = 0;

    /*     console.log("ordenadoM", ordenadoM)
        console.log("ordenadoN", ordenadoN) */

    while (iterarM < m || iterarN < n) {
        //Controlamos que el arreglo no se desborde
        if (!ordenadoN[iterarN] && !ordenadoM[iterarM]) break;

        let cotaSuperior = (ordenadoM[iterarM] <= ordenadoN[iterarN] + k);
        let cotaInferior = (ordenadoM[iterarM] >= ordenadoN[iterarN] - k);
        if (cotaSuperior && cotaInferior) {
            /*  console.log("iterarM", iterarM)
             console.log("iterarN", iterarN) */
            iterarM++;
            iterarN++;
            personasQuePuedenArrendar++;
        } else if (cotaInferior) {
            iterarN++;
        } else {
            iterarM++;
        }

    }
    return personasQuePuedenArrendar;
}

let tolerancia = 5;
let capacidadPersonas = [30, 60, 75];
let costoApartamentos = [60, 45, 80, 60];

let personasQuePuedenArrendar = alquiler(costoApartamentos.length, capacidadPersonas.length, tolerancia, capacidadPersonas, costoApartamentos);
console.log("personasQuePuedenArrendar son: ", personasQuePuedenArrendar)
  