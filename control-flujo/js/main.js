// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */


function hasAgeEnough(age){
  if(age > 17) {
    console.log(`Edad ${age} Si tiene edad para votar`);
  } else {
    console.log(`Edad ${age} No tiene edad para votar`);
  }
}

hasAgeEnough(15);
hasAgeEnough(45);

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function score(c1, c2, c3, c4) {
  const av = (c1 + c2 + c3 + c4) / 4;
  if( av >= 7 ) {
    console.log(`Scores ${[...arguments]} Aprobado`);
  } else {
    console.log(`Scores ${[...arguments]} Reprobado`);
  }
}

score(4, 2, 3, 5);
score(8, 9, 10, 8);

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function isPrime(n) {
  let prime = true;

  for(let i = 2; i < n; i++){
    if(n % i != 0) {
      prime = false;
      break;
    }
  }

  if(prime) console.log(`${n} es primo`);
  else console.log(`${n} no es primo`)
  return prime;
}

isPrime(3);
isPrime(15);


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

const isDualDivisible = (value, d1, d2) => (value % d1 == 0 && value % d2 == 0);

function isDivisibleBy7and8(value){
  const v = isDualDivisible(value, 7, 8);
  if(v) console.log(`${value} Si es divisible por 7 y 8`);
  else console.log(`${value} No es divisible por 7 y 8`);
}

isDivisibleBy7and8(100);
isDivisibleBy7and8(7*8);


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function isDivisibleBy4and9(value){
  const v = isDualDivisible(value, 4, 9);
  if(v) console.log(`${value} Si es divisible por 4 y 9`);
  else console.log(`${value} No es divisible por 4 y 9`);
}

isDivisibleBy4and9(7);
isDivisibleBy4and9(4*9);

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculator(op, n1, n2) {
  let result = null;
  switch(op) {
    case "suma":
      result = n1 + n2;
      console.log(`El resultado de la ${op} es ${result}`);
      break;
    case "resta":
      result = n1 - n2;
      console.log(`El resultado de la ${op} es ${result}`);
      break;
    case "multiplicacion":
      result = n1*n2;
      console.log(`El resultado de la ${op} es ${result}`);
      break;
    case "division":
      result = n1 / n2;
      console.log(`El resultado de la ${op} es ${result}`);
      break;
    default: 
      console.log('Operacion no aceptada');
      break;
  }
}

calculator("suma", 3, 4);
calculator("resta", 10, 34);
calculator("multiplicacion", 45, 2);
calculator("division", 4, 4);
calculator("logaritmo", 3, 4);


/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function suggestMovie(category = "") {
  category = category.toLowerCase()
  const message = "Te recomendamos ver ";
  switch(category){
    case "accion":
      console.log(`${category}: ${message} Duro de matar`);
      break;
    case "drama":
      console.log(`${category}: ${message} Crepusculo`);
      break;
    case "comedia":
      console.log(`${category}: ${message} Ace Ventura`);
      break;
    case "romance":
      console.log(`${category}: ${message} Titanic`);
      break;
    case "suspenso":
      console.log(`${category}: ${message} Aniquilación`);
      break;
    case "terror":
      console.log(`${category}: ${message} La monja`);
      break;
    default: 
      console.log('Lo siento, no conozco esa categoria');
    break;
  }
}

suggestMovie("accion");
suggestMovie("drama");
suggestMovie("ComedIa");
suggestMovie("romance");
suggestMovie("suspenso");
suggestMovie("terror");
suggestMovie("Ninguna");

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */


function ATM(option) {

    if(option == 1){
      console.log("Usted va a retirar");
    } else if (option == 2) {
      console.log("Usted va a transferir");
    } else if (option == 3) { 
      console.log("Usted hara un deposito");
    } else if (option == 4) {
      console.log("Usted hara el pago de un servicio");
    } else {
      console.log("Opcion no valida");
    } 
      
}

ATM(1);
ATM(2);
ATM(3);
ATM(4);
ATM(5);

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

const mxnConvMap = {
  USD: 17.07,
  EU: 18.23,
  YEN: 0.12,
  LBE: 21.15,
  FRAN: 19.00,
}

function mxnCurrencyConverstion(quantity, option){
  let conv = null;
  switch(option){
    case 1:
      conv = quantity/mxnConvMap.USD;
      console.log(`${quantity} pesos Son ${conv} USD`);
      break;
    case 2:
      conv = quantity/mxnConvMap.EU;
      console.log(`${quantity} pesos Son ${conv} EURO`);
      break;
    case 3:
      conv = quantity/mxnConvMap.YEN;
      console.log(`${quantity} pesos Son ${conv} YEN`);
      break;
    case 4:
      conv = quantity/mxnConvMap.LBE;
      console.log(`${quantity} pesos Son ${conv} Libras esterlinas`);
      break;
    case 5:
      conv = quantity/mxnConvMap.FRAN;
      console.log(`${quantity} pesos Son ${conv} Francos suizos`);
      break;
    default:
      console.log('Opcion no valida');
      break;
  }
}

const cincopeso = 5;

mxnCurrencyConverstion(cincopeso, 1);
mxnCurrencyConverstion(cincopeso, 2);
mxnCurrencyConverstion(cincopeso, 3);
mxnCurrencyConverstion(cincopeso, 4);
mxnCurrencyConverstion(cincopeso, 5);
mxnCurrencyConverstion(cincopeso, 6);

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */

const dbCuppon = "DESCUENTO10";

function discountCuppon(price, code) {
  let val = null;
  if(code == dbCuppon){
    val = price*0.9
    console.log(`Cupon valido, el precio es ${val}`);
  } else {
    val = price;
    console.log(`Cupon no valido, el precio es ${val}`);
  }
}

discountCuppon(100, dbCuppon);
discountCuppon(100, "NOVALID");