//Realice un programa que devuelva la potencia de un numero.
//La base y el exponente deben ser ingresados por teclado
//Solo deben admitirse exponentes mayores o iguales a cero
//Recuerde que el resultado de un numero elevado a 0 es 1
//Separe la logica de calcular la potencia utilizando metodos
// 3^4=3*3*3*3=81

//return, for, question int
// base = numero a multiplicar
// exponente = cantidad de veces que se multiplica

import * as rls from 'readline-sync'

let base : number = rls.questionInt("Ingrese valor de base ")
let exponente : number = rls.questionInt("Ingrese valor de exponente ")

function potencia (base : number, exponente : number) {
    let resultado : number;
    let i = 0;
    for (resultado = 1; i < exponente; i++)
        resultado *= base
return resultado
}
console.log("El resultado de la potencia es: " + potencia(base, exponente))

