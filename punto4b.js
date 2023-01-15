
class Arbol {
    constructor() {
        this.arbolPalabras = {};
        this.esElFinalDeLaPalabra = false
    }
    // Insertar palabra en el trie
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
    }

}



const autocompletado = (N, OPS = []) => {

    const arbol = new Arbol();

    for (let i = 0; i < N; i++) {
        if (OPS[i][0] == 1) {
            arbol.insertar(OPS[i][1])
        } else {

        }
    }

    console.log("arbol.arbolPalabras: ", JSON.stringify(arbol.arbolPalabras))

}

let OPS = [[1, "hola"], [1, "cabeza"], [1, "arroz"], [2, "aro"], [2, "pez"]]
const palabraAutocompletada = autocompletado(OPS.length, OPS)