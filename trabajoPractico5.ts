import fs from "node:fs";

const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];
let productosTodos : string = ""

for (let i : number = 0; i < productos.length; i++ ){
    productosTodos += `${productos[i]} `;
    }

    fs.writeFileSync('./productos.txt', productosTodos);

const productosRead : string = fs.readFileSync('./productos.txt', 'utf-8');
const productosTrim : string = productosRead.trim()
const productosShow : string[] = productosTrim.split(" ")

    console.log(productosShow)

    //////////////////// Parte dos

const precios: number[] = [525, 3500, 400, 1999];
let preciosString : string = precios.toString();
let preciosSeparados : string = ""


for (let i : number = 0; i < preciosString.length; i++ ){
    preciosSeparados += `${preciosString[i]}`;
    }
 fs.writeFileSync('./precios.txt', preciosSeparados)

 const preciosRead : string = fs.readFileSync('./precios.txt', 'utf-8');
 const preciosTrim : string = preciosRead.trim()
 const preciosShow : string[] = preciosTrim.split("   ")
 
     console.log(preciosShow)


