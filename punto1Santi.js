const buscarOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == tiempo) {
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
        console.log(i)
        if (A[i] == 0) {
            let arregloActualizado = estaOficinaDisponible(oficinasDisponibles, A[i]) ? buscarOficinaDisponible(oficinasDisponibles, A[i]) : false;
            console.log("aaa: ", arregloActualizado)
            if (!arregloActualizado) {
                oficinasDisponibles[i] = (T - A[i]);
                if (!(T - A[i] === 0)) {
                    oficinasMinimas++;
                }
            }

        } else

            if ((A[i] + A[i + 1]) < T && (A[i] && A[i + 1] != 0) && estaOficinaDisponible(oficinasDisponibles, A[i] + A[i + 1])) {
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
                console.log("arregloActualizado antes: ", arregloActualizado);

                if (!arregloActualizado) {
                    oficinasDisponibles.push(T - A[i]);
                    oficinasMinimas++;
                }

                console.log("arregloActualizado: ", arregloActualizado);

            }

    }
    console.log("oficinasDisponibles: ", oficinasDisponibles);
    return oficinasMinimas;

}

const tiempoMaxAtencion = 8;
const tiempoAtencion = [4, 7, 8, 6, 4]; // [0,1,0,2]
const numeroOficinas = colaDeAtencion(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas);