class Trie {
    constructor() {
        this.root = {};
        this.isEndOfWord = false
    }
    // Insertar palabra en el trie
    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!current[char]) {
                current[char] = {};
            }
            current = current[char];
        }
        current.isEndOfWord = true;
    }
    // encontrar prefijo
    findPrefix(word) {
        let current = this.root;
        let prefix = "";
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (current.isEndOfWord) {
                return prefix;
            }
            if (current[char]) {
                prefix += char;
                current = current[char];
            } else {
                return null;
            }
        }
        return current.isEndOfWord ? prefix : null;
    }
}

//ejemplo de uso
const trie = new Trie();
trie.insert("hola");
trie.insert("cabeza");
trie.insert("arroz");

console.log("trie.root: ", JSON.stringify(trie.root))

console.log(trie.findPrefix("aro")); // arroz
console.log(trie.findPrefix("pez")); // null
