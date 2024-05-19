/*

3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
-Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
si el numero es par o impar

*/

let arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMayor: number = 0;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > numeroMayor) {
    numeroMayor = arreglo[i];
  }
}

console.log("El numero mayor es: " + numeroMayor);

function parImpar(numero: number): string {
  if (numero % 2 === 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

console.log("El numero es " + parImpar(numeroMayor));

