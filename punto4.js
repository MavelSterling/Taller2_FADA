
class Arbol {
    constructor() {
        this.arbolPalabras = {};
        this.esElFinalDeLaPalabra = false
        this.arregloFinal = [];
    }
    // Insertar palabra en el arbol
    insertar(palabra) {
        let arbolActual = this.arbolPalabras;
        for (let i = 0; i < palabra.length; i++) {
            let letra = palabra[i];
            if (!arbolActual[letra]) {
                arbolActual[letra] = {};
            }
            arbolActual = arbolActual[letra];
        }
        arbolActual.esElFinalDeLaPalabra = true;
        arbolActual.palabraCompleta = palabra;
    }
    // encontrar prefijo
    encontrarPrefijo(palabra) {
        this.arregloFinal = [];
        let arbolActual = this.arbolPalabras;
        let prefijo = "";
        for (let i = 0; i < palabra.length; i++) {
            let letra = palabra[i];
            if (arbolActual[letra]) {
                prefijo += letra;
                arbolActual = arbolActual[letra];
            } else {
                break;
            }
        }
        prefijo !== "" && prefijo.length >= Math.ceil(palabra.length/2) ? this.autocompletarPalabra(arbolActual, prefijo) : this.arregloFinal.push("")
        return this.arregloFinal;
    }

    // recorrer arbol para autocompletar palabra
    autocompletarPalabra(arbolActual, prefijo) {
        if (arbolActual.esElFinalDeLaPalabra) {
            this.arregloFinal.push(arbolActual.palabraCompleta);
        }
        for (let letra in arbolActual) {
            if (letra !== "esElFinalDeLaPalabra" && letra !== "palabraCompleta") {
                this.autocompletarPalabra(arbolActual[letra], prefijo + letra);
            }
        }
    }
}


const autocompletado = (N, OPS = []) => {

    const arbol = new Arbol();
    let palabraAutocompletada = []
    for (let i = 0; i < N; i++) {
        if (OPS[i][0] == 1) {
            arbol.insertar(OPS[i][1])
        } else if (OPS[i][0] == 2) {
            palabraAutocompletada.push(arbol.encontrarPrefijo(OPS[i][1]).toString())
        }
    }
    return palabraAutocompletada

}

let OPS = [[1, "calabaza"], [1, "cabeza"], [1, "carro"], [2, "ca"]]
const palabrasAutocompletadas = autocompletado(OPS.length, OPS)
console.log("palabrasAutocompletadas: ", palabrasAutocompletadas)

console.log("calabra" < "cabeza") // a<b returns a, else return b

//n predicciones, n palabras en el diccionario, separar n palabras y hacer n comparaciones