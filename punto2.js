
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

const arrendarApto = (m, n, k, M = [], N = []) => {

    let personasQuePuedenArrendar = 0;

    const ordenadoM = countingSort(M, 1, 100000);
    const ordenadoN = countingSort(N, 1, 100000);

    let iterarM = 0;
    let iterarN = 0;

        console.log("ordenadoM", ordenadoM)
        console.log("ordenadoN", ordenadoN)

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

let personasQuePuedenArrendar = arrendarApto(costoApartamentos.length, capacidadPersonas.length, tolerancia, capacidadPersonas, costoApartamentos);
console.log("personasQuePuedenArrendar son: ", personasQuePuedenArrendar)
