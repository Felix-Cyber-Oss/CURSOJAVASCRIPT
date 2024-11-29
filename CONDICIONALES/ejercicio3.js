// Comparación de dos números:
//Declara dos variables a y b con valores numéricos y utiliza condicionales para
//comparar si a es mayor, menor o igual a b.

const a=parseInt(prompt("La variable a es: "));
const b=parseInt(prompt("La variable b es: "));

if (a>b){
    console.log("La variable mayor es: ",a);
}
else if (a<b){
    console.log("La variable mayor: ",b)
} else{
    console.log("a es igual a b")
}
