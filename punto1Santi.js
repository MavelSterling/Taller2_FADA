const buscarOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (tiempo == 0) {
            console.log("cerooo", arreglo)
            return arreglo
        } else if (arreglo[i] == tiempo) {
            console.log("arreglo[i] == tiempo", arreglo)
            arreglo[i] = 0;
            console.log(arreglo)
            return arreglo
        } else if (arreglo[i] > tiempo) {
            console.log("arreglo[i] sdfsdfsd antes ", arreglo)

            console.log("arreglo", arreglo)
            console.log("arreglo[i]", arreglo[i])
            console.log("tiempo", tiempo)
            console.log("arreglo[i] > tiempo", arreglo[i] > tiempo)
            console.log("i", i)

            arreglo[i] = (arreglo[i] - tiempo);
            console.log("arreglo[i] sdfsdfsd desp", arreglo)

            return arreglo
        }
    }

    return arreglo;
}

const estaOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (tiempo == 0) {
            return true;
        } else if (arreglo[i] == tiempo) {
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
        if (A[i] == 0) {
            oficinasDisponibles[i] = T;
            oficinasMinimas++;
        } else if ((A[i] + A[i + 1]) < T && (A[i] && A[i + 1] != 0) && (A[i] + A[i + 1] == T) && estaOficinaDisponible(oficinasDisponibles, A[i] + A[i + 1])) {
            oficinasDisponibles = buscarOficinaDisponible(oficinasDisponibles, (A[i] + A[i + 1]));
            console.log("A[i]", A[i])
            console.log("T - (A[i] + A[i + 1])", T - (A[i] + A[i + 1]))
            oficinasDisponibles.push(T - (A[i] + A[i + 1]));
            console.log("oficinasDisponiblesssss: ", oficinasDisponibles);
            i++;
            oficinasMinimas++;
        } else if (A[i] <= T) {
            console.log("entreee", A[i])
            let arregloActualizado = estaOficinaDisponible(oficinasDisponibles, A[i]) ? buscarOficinaDisponible(oficinasDisponibles, A[i]) : false;

            if (!arregloActualizado) {
                oficinasDisponibles[i] = (T - A[i]);
                oficinasMinimas++;
            }

            console.log("arregloActualizado: ", arregloActualizado);

        }

    }
    console.log("oficinasDisponibles: ", oficinasDisponibles);
    return oficinasMinimas;

}

const tiempoMaxAtencion = 8;
 const tiempoAtencion = [0, 7, 0, 6, 4]; // [1,2,4] [2,4] 
/* const tiempoAtencion = [0, 10, 1, 1]; // [1,2,4] [2,4] */
const numeroOficinas = colaDeAtencion(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas);