
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
        prefijo !== "" && prefijo.length >= Math.ceil(palabra.length / 2)
            ? this.autocompletarPalabra(arbolActual, prefijo)
            : this.arregloFinal.push("")
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

const menorLexicograticamente = (arr) => {
    return [arr.reduce((a, b) => a < b ? a : b)];
}

const autocompletado = (N, OPS = []) => {

    const arbol = new Arbol();
    let palabraAutocompletada = []
    let palabraMenor = ""
    for (let i = 0; i < N; i++) {
        if (OPS[i][0] == 1) {
            arbol.insertar(OPS[i][1])
        } else if (OPS[i][0] == 2) {
            palabraMenor = menorLexicograticamente((arbol.encontrarPrefijo(OPS[i][1])))
            palabraAutocompletada.push(palabraMenor.toString())
        }
    }
    return palabraAutocompletada
}


// let OPS = [[1, "calabaza"], [1, "cabeza"], [1, "carro"], [2, "ca"]] // ["arroz", ""]
// let OPS = [[1, "hola"], [1, "cabeza"],[1, "caa"], [1, "arroz"], [2, "aro"], [2, "ca"]] // [ 'arroz', 'caa' ]
let OPS = [[1, "hola"], [1, "cabeza"], [1, "caa"], [1, "arroz"], [2, "aro"], [2, "ke"], [2, "hol"]] // [ 'arroz', '', 'hola' ]

const palabrasAutocompletadas = autocompletado(OPS.length, OPS)
console.log("palabrasAutocompletadas: ", palabrasAutocompletadas)

