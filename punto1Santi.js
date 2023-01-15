const buscarOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == tiempo) {
            arreglo[i] = 0;
            return arreglo
        }
    }

    return arreglo;
}

const estaOficinaDisponible = (arreglo = [], tiempo) => {

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === tiempo) {
            return true
        }
    }

    return false;
}

const colaDeAtencion = (N, T, A = []) => {
    let oficinasMinimas = 0;
    let oficinasDisponibles = [];

    for (let i = 0; i < N; i++) {

       /*  if ((A[i] + A[i + 1]) === T) {
            oficinasDisponibles = buscarOficinaDisponible(oficinasDisponibles, (A[i] + A[i + 1]));
            oficinasDisponibles.push(T - (A[i] + A[i + 1]));
            i++;
            oficinasMinimas++;
        } else */ if (A[i] <= T) {

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

/* const tiempoMaxAtencion=  8;
const tiempoAtencion = [4, 7, 8, 6, 4, 2]; // [0,0,0,4,6] [4,7,8,6,8,8]
const numeroOficinas = colaDeAtencion(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas); */

//[4,2]

//Solo esperan cuando hay oficina con su tiempo disponible, de resto, necesita otra oficina


function colaDeAtencion2(N, T, A = []) {

    var numeroOficinas = 0, tiempoActual = 0;

    //recorremos el arreglo de tiempos de atencion
    for (var i = 0; i < N; i++) {
        /*  Si el tiempoActual más el tiempo de atencion actual del arreglo es mayor que el tiempoMax de atencion 
            entonces significa que no cabe mas de una persona en esa oficina y se incrementa el numeroOficinas y el
            tiempoActual sigue siendo cero
        */
        if (tiempoActual + A[i] > T) {
            console.log("tiempoActual: ", tiempoActual)

            console.log(`A[${i}]: `, A[i])

            numeroOficinas++;
            console.log(`numeroOficinas: `, numeroOficinas)

            tiempoActual = 0;
        }
        /* Si no, signifca que el cliente entró a la sala pero puede que entre otra persona que tenga el tiempo restante del tiempoActual */
        tiempoActual += A[i];
    }

    /* if (tiempoActual > 0) {
        numeroOficinas++;
    } */
    console.log("-----------------------------------------------")
    console.log("tiempoActual: ", tiempoActual)
    return numeroOficinas;
}

function min_attention_points(n, t, a) {
    var left = 1, right = n, result = 0;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (check(n, t, a, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
}

function check(n, t, a, mid) {
    var time_remaining = t, client_index = 0;
    for (var i = 0; i < mid; i++) {
        if (time_remaining < a[client_index]) {
            time_remaining = t;
        }
        time_remaining -= a[client_index++];
        if (client_index == n) {
            return true;
        }
    }
    return false;
}



const tiempoMaxAtencion = 8;
/* const tiempoAtencion = [4, 7, 8, 6, 4, 2]; // [0,0,0,4,6] [4,7,8,6,8,8] */
/* const tiempoAtencion = [4, 7, 8, 6, 4, 2]; // [0, 0, 0, 0, 4, 6] [4, 7, 8, 6, 8]  */
const tiempoAtencion = [4, 7, 8, 6, 4]; // [0, 0, 0, 0, 4, 6] [4, 7, 8, 6, 8] 
const numeroOficinas = min_attention_points(tiempoAtencion.length, tiempoMaxAtencion, tiempoAtencion);
console.log("numeroOficinas: ", numeroOficinas);
