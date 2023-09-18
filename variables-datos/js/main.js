/** Ejercicio para esta sesion
 *
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 *
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 *
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 *
 * Declarar 5 variables y convertirlas a otro tipo de dato
 *
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

// VARIABLES NUMBER
let usersLength = 10;
let countDays = 31;
let userAge = 40;
let countErrors = 10;
let fileSize = 12_000_000;
let population = 300_000;
let sprintNumber = 2;
let totalSprints = 12;
let year = 2023;
const E = 18;

// VARIABLES STRING
let firstName = 'Juan';
let lastName = 'Sosa';
let city = 'Buenos Aires';
let countryCode = 'EU';
let foodName = 'Pizza';
let month = 'March';
let token = 'x-asdfadsfsadfsadf';
let carType = 'Sedan';
let carName = 'Vocho';
let favoriteBook = 'Harry Potter';

//VARIABLES BOOLEAN
const isAuthenticated = false;
let isPrimaryColor = true;
let isNumber = false;
let isPrimeNumber = true;
let isPair = false;
let isEmail = true;
let required = true;
const STRICT_ENABLED = true;
let idFound = false;
let haveRating = true;

// OPERACIONES

let a = 10,
  b = 20;
const sum = a + b;
console.log('🚀 ~ file: main.js:66 ~ sum:', sum);

const sub = a - b;
console.log('🚀 ~ file: main.js:70 ~ sub:', sub);

const mul = a * b;
console.log('🚀 ~ file: main.js:72 ~ mul:', mul);

const div = a / b;
console.log('🚀 ~ file: main.js:75 ~ div:', div);

// CONCATENACIÓN

const firstSentence = 'Hola  mi nombre es ';
const salute = firstSentence + firstName;
console.log('🚀 ~ file: main.js:82 ~ salute:', salute);

const fullName = firstName + ' ' + lastName;
console.log('🚀 ~ file: main.js:85 ~ fullName:', fullName);

const populationMessage = 'The total populations is: ' + population;
console.log('🚀 ~ file: main.js:88 ~ populationMessage:', populationMessage);

const errorCount = 10;
const errorMessage = 'Found ' + errorCount + ' errors in app';
console.log('🚀 ~ file: main.js:92 ~ errorMessage:', errorMessage);

const messageToken = "Your token is " + token;
console.log("🚀 ~ file: main.js:92 ~ messageToken:", messageToken)


//CONVERSCION

const userInDb = "";
const existsUser = Boolean(userInDb);
console.log("🚀 ~ file: main.js:99 ~ existsUser:", existsUser)

const authString = String(isAuthenticated);
console.log("🚀 ~ file: main.js:102 ~ authString:", authString)

const errorCode = 0;
const isError = Boolean(errorCode);
console.log("🚀 ~ file: main.js:106 ~ isError:", isError)

const errorFetch = "404";
const resourceNotFoundCode = Number(errorFetch);
console.log("🚀 ~ file: main.js:110 ~ resourceNotFoundCode:", resourceNotFoundCode)

const anotherDBUser = "Ivan";
const isUserFound = Boolean(anotherDBUser);
console.log("🚀 ~ file: main.js:114 ~ isUserFound:", isUserFound)



