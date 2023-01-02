const buscarOficinaDisponible = (arreglo = [], tiempo, T) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (tiempo == 0) {
            console.log("cerooo", arreglo)
            return buscarOficinaDisponible(arreglo, T, 0)
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

const estaOficinaDisponible = (arreglo = [], tiempo, T) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (tiempo == 0) {
            console.log("cerooo", arreglo)
            return estaOficinaDisponible(arreglo, T, 0)
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
        console.log(i)
        if (A[i] == 0) {
            let arregloActualizado = estaOficinaDisponible(oficinasDisponibles, A[i], T) ? buscarOficinaDisponible(oficinasDisponibles, A[i], T) : false;
            console.log("aaa: ", arregloActualizado)
            if (!arregloActualizado) {
                oficinasDisponibles[i] = (T - A[i]);
                if (!(T - A[i] === 0)) {
                    oficinasMinimas++;
                }
            }

        } else

            if ((A[i] + A[i + 1]) < T && (A[i] && A[i + 1] != 0) && estaOficinaDisponible(oficinasDisponibles, A[i] + A[i + 1], T)) {
                oficinasDisponibles = buscarOficinaDisponible(oficinasDisponibles, (A[i] + A[i + 1], T));
                console.log("A[i]", A[i])
                console.log("T - (A[i] + A[i + 1])", T - (A[i] + A[i + 1]))
                oficinasDisponibles.push(T - (A[i] + A[i + 1]));
                console.log("oficinasDisponiblesssss: ", oficinasDisponibles);
                i++;
                oficinasMinimas++;
            } else if (A[i] <= T) {
                console.log("entreee", A[i])
                let arregloActualizado = estaOficinaDisponible(oficinasDisponibles, A[i], T) ? buscarOficinaDisponible(oficinasDisponibles, A[i], T) : false;
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
const tiempoAtencion = [0, 0, 0, 0, 0]; // [7,0]
const numeroOficinas = colaDeAtencion(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas);