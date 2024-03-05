//2.-
//Se crean dos variables con sus respectivos valores a partir de los datos ingresados por un usuario.
alert("Ingrese los numeros para ejecutar operaciones")
const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));

//Se establence cada tipo de operación requerida para los dos números ingresados.
var suma = num1 + num2;
var resta = num1 - num2;
var divi = num1 / num2;
var multi = num1 * num2;
var modulo = num1 % num2;

//Se muestran los resultados de las operaciones
document.write(`<h4>Los numeros son ${num1} y ${num2}</h4>`)
document.write(`<p> Los números son ${num1} y ${num2} 
                <br> El resultado de la suma es ${suma} 
                <br> El resultado de la resta es ${resta} 
                <br> El resultado de la división es ${divi}
                <br> El resultado de la multiplicación es ${multi}
                <br> El resultado del módulo es ${modulo}
                 </p> `);
//3.-
//Se solicitan los °C y se convierten en float(decimal)
var centi = parseFloat(prompt("Ingresa grados centígrados para convertir a Kelvin y Farenheint"))

//Se establece la formula para obtener los Kelvin
var kel = centi + 273.15;

//Se establece la formula para obtener los farenheint

var far = (centi * 9/5) + 32;

//Se muestran los resultados
document.write(`<h4>${centi} son los grados ingresados</h4>`)
document.write("Se ha convertido en "+ kel + " grados kelvin y " + far + " grados farenheint")

//4.-
//Se solicita una cantidad de dias al usuario

var dias = parseInt(prompt("Ingrese una cantidad de dias para convertir en años semanas y dias restantes"))

const year = Math.floor(dias / 365)
const semanas = Math.floor((dias % 365) / 7)
const diasrest = Math.floor((dias % 365) % 7)

document.write(`<h4> ${dias} son los días a convertir </h4>`)
document.write(`<p>Los años son ${year}, las semanas son ${semanas}, los dias son ${diasrest}</p>`)

// 5.-

alert("Ingrese 5 numeros para sumarlos y calcular el promedio")
var valor1 = parseFloat(prompt("Ingrese el primer número"))
var valor2 = parseFloat(prompt("Ingrese el segundo número"))
var valor3 = parseFloat(prompt("Ingrese el tercer número"))
var valor4 = parseFloat(prompt("Ingrese el cuarto número"))
var valor5 = parseFloat(prompt("Ingrese el quinto número"))


var sumatotal = valor1 + valor2 + valor3 + valor4 + valor5

var promedio = (valor1 + valor2 + valor3 + valor4 + valor5) / 5

document.write(`<h4>Los numeros son ${valor1} ${valor2} ${valor3} ${valor4} ${valor5}</h4>`)
document.write(`<p>La suma total de los numeros es ${sumatotal}`)
document.write(`<p>El promedio de los numeros ingresados es de ${promedio}`)