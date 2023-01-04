const buscarOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == tiempo) {
            arreglo[i] = 0;
            return arreglo
        } else if (arreglo[i] > tiempo) {
            arreglo[i] = (arreglo[i] - tiempo);
            return arreglo
        }
    }

    return arreglo;
}

const estaOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == tiempo) {
            return true
        } else if (arreglo[i] > tiempo) {
            return true
        }
    }

    return false;
}

const colaDeAtencion = (N, T, A = []) => {
    let oficinasMinimas = 0;
    let oficinasDisponibles = [];

    for (let i = 0; i < N; i++) {

        if ((A[i] + A[i + 1]) <= T) {
            oficinasDisponibles = buscarOficinaDisponible(oficinasDisponibles, (A[i] + A[i + 1]));
            oficinasDisponibles.push(T - (A[i] + A[i + 1]));
            i++;
            oficinasMinimas++;
        } else if (A[i] <= T) {

            let arregloActualizado =
                estaOficinaDisponible(oficinasDisponibles, A[i])
                    ? buscarOficinaDisponible(oficinasDisponibles, A[i])
                    : false;

            if (!arregloActualizado) {
                oficinasDisponibles.push(T - A[i]);
                oficinasMinimas++;
            }

        }

    }
    console.log("oficinasDisponibles: ", oficinasDisponibles);
    return oficinasMinimas;

}

const tiempoMaxAtencion = 8;
const tiempoAtencion = [4, 3, 8, 7, 5, 1]; // [0,1,0,2]
const numeroOficinas = colaDeAtencion(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas);