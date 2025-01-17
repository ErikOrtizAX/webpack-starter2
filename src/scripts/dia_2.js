/* Function Scope */
let saludo = "Otro Hola";
function saludar() {
    let saludo = "Hola";
    console.log(saludo);
}
console.log(saludo);

saludar();

/* Block Scope */
if(true) {
    var nombre = "Issac";
    console.log("Valor de nombre en el bloque", nombre);
}
console.log("Valor de nombre fuera del bloque", nombre);

//let index = 10;
for (let index = 0; index <= 5; index++) {
    console.log("Valor de index en el bloque", index);
}
//console.log("Valor de index fuera del bloque", index);

/* IIFE Pattern */
(function() {
    console.log("Hola convencional");
})();

(() => {
    console.log("Hola arrow");
})();

/* Closures */
const contador = (function() {
    let _contandor = 0;

    function incrementar() {
        return _contandor++;
    }

    function decrementar() {
        return _contandor--;
    }

    function valor() {
        return _contandor;
    }

    return { incrementar, decrementar, valor };

})();

contador;
console.log("Valor: ", contador.valor());

contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log("Valor nuevo: ", contador.valor());

contador.decrementar();

console.log("Valor nuevo: ", contador.valor());
console.log("Closure: ", contador);

/* Arrow Functions */
// function suma(a, b) {
//     return a + b;
// }

// let suma = (a, b) => {
//     return a + b;
// };

let suma = (a, b) => a + b;

// console.log("Funcion convencional: ", suma(2, 5));

console.log("Funcion arrow: ", suma(2, 5));

// Revisar
const funciones = {
    nombre: "Saludo",
    x: function() {
        console.log("F1: ", this.nombre);
    },
    y: () => {
        //console.log("F2: ", this.funciones.nombre); // window
    }
};

console.log("Func 1: ", funciones.x());
console.log("Func 2: ", funciones.y());


/* Default parameters and optionals */
// function persona(nombre, edad) {
//     nombre = typeof nombre !== 'undefined' ? nombre : "Issac";
//     edad = typeof edad !== 'undefined' ? edad : 30,
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
// }

function persona(nombre = "Sin Nombre", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

persona("Issac", 30);

/* Constructor Function() */
// function sum(a, b) {
//     return a + b;
// }

const sum = new Function('a', 'b', 'let resultado = a + b; return resultado;');

console.log("Sum igual a:", sum(10, 8));

/* Prototype Persona.prototype */
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    // this.saludar = () => {
    //     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
    // };
}

Persona.prototype.saludar = function() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

let usuario = new Persona("Javier", 30);
console.log("Persona: ", usuario);

usuario.saludar();

/* Array Iteration */

const posts = [{
    id: 1,
    titulo: "Mi primer Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "web"]
},{
    id: 2,
    titulo: "Mi segundo Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "mobile"]
},{ 
    id: 3,
    titulo: "Mi tercer Post",
    img: "https://picsum.photos/200",
    tags: ["javascript", "desktop"]
}];

// foreach
    posts.forEach(post => console.log("foreach:", post));
// filter
    posts.filter(post => console.log("filter: ", post.tags.includes("web")));
// every
    posts.every(post => console.log("every:", post.tags.includes("javascript"))); // true
    posts.every(post => console.log("every:", post.tags.includes("desktop"))); //false
// map
    let arreglo = [];
    posts.map(post => {
        arreglo.push(post.titulo);
        console.log(arreglo);
    });
// reduce
    let tags = posts.reduce((allTags, post) => {
        return Array.from(new Set([...allTags, ...post.tags ]));
    }, []);

    console.log("Tags:", tags);

// Ejercicios de: push, pop, unshift, shift, sort, reverse, splice, slice, concat, find, some, indexOf

//push
let array = [1,2,3,4,5];
console.log("los numeros de array original son: ",array);
array.push(6,7,8,9);
let count = array.push(10);
console.log("los numeros de array son: ",array);
console.log("El array tiene:",count, "elemento(s)");
//pop
const lastElement = array.pop();
console.log("Elemento eliminado del array:",lastElement);
console.log("Nuevo array:",array);
console.log("otro numero:",array.pop());
console.log("Nuevo array:",array);
//unshift
count = array.unshift(6,7,8,9);
console.log("El nuevo array tiene:",count, "elemento(s)");
console.log("El array tiene:",array);
//sort
//Numbers
console.log("El array desordenado:",array);
array.sort(function(a, b) {
    return a - b;
});
console.log("El array ordenado:",array);
//strings
let arrayString = ["U","n","A","r","R","y","t","i","e","N","E","N","u","M","E","r","o","s"];
console.log("El arrayString desordenado:",arrayString);
arrayString.sort();
console.log("El arrayString ordenado:",arrayString);
//reverse
console.log("El array ordenado de menor a mayor:",array);
let arrayInver=array.reverse();
console.log("El array ordenado de mayor a menor:",arrayInver,array);
//splice
console.log("arrayString original:",arrayString);
arrayString.splice(5,1,"A");
console.log("arrayString nuevo con remplazo:",arrayString);
arrayString.splice(5,0,"A");
console.log("arrayString original agregando:",arrayString);
//slice
console.log("Array:",array);
console.log("Array extraido:",array.slice(5,9));
//concat
let arrNum = [1,2,3,4];
let arrNum1 = [4,5,6,7];
console.log("arreglo 0:",arrNum);
console.log("arreglo 1:",arrNum1);
console.log(arrNum.concat(arrNum1));
//indexOf
const letters = ["A","e","B","y","R"];
console.log("Buscando en el arreglo arraySring:",letters);
console.log("arrayString:",arrayString);
let i=0;
while( i !== 5){
    let found=arrayString.indexOf(letters[i]);
    if(found==0){
        console.log("letra",arrayString[found],"encontrada en el arrayString");
    }
    if(found!=0){
        console.log("letra",arrayString[found],"no encontrada en el arrayString");
    }
    i++;
}
//find

//some

/* Class */
import { Animal } from "./module";

let animal = new Animal("Leon");
animal.corre(100);
animal.temperamento(true);


class Perro extends Animal {
    algoDePerros(temp) {
        let flag = temp ? "ALERTA" : "OK";
        return flag;
    }

    temperamento(agresivo) {
        this.agresivo = agresivo;
        let flag;
        if(agresivo){
            flag = this.algoDePerros(agresivo);
            console.log(`${super.temperamento(agresivo)} No es recomendable tenerlo en casa - ${flag}`);
        }else {
            flag = this.algoDePerros(agresivo);
            console.log(`${super.temperamento(agresivo)}Es recomendable tenerlo en casa - ${flag}`);
        }
    }
}

let perro = new Perro("San Bernardo");
perro.corre(90);
perro.temperamento(true);

