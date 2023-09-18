/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


/**
 * FUNCIONES DECLARACION REGULAR
 */


// Perimetro de dun circulo
function circlePerimeter (radius) {
  return 2*Math.PI*radius;
}

//Area de un rectangulo
function rectangleArea (width, height) {
  return width * height;
}

// El cuadrado de un numero
function square (num) {
  return num ** 2;
}

// Convierte grados celsius a fahrenheit
function celsiusToFahrenheit (value) {
  return (value * (9/5) ) + 32; 
}

// Calcula el voltage
function calculateVoltage(resistance, current) {
  return current * resistance;
}

// Calcula el volumen de una esfera
function getSphereVolume(radius) {
  return (4/3)*Math.PI*(radius ** 3);
}




/**
 * FUNCIONES DECLARACION ARROW
 */

// Perimetro de dun circulo
const circlePerimeterA = (radius) => 2*Math.PI*radius;

//Area de un rectangulo
const rectangleAreaA = (width, height) => width * height;

// El cuadrado de un numero
const squareA = (num) => num ** 2;

// Convierte grados celsius a fahrenheit
const celsiusToFahrenheitA = (value) => (value * (9/5) ) + 32; 

// Calcula el voltage
const calculateVoltageA = (resistance, current) => current * resistance;

// Calcula el volumen de una esfera
const getSphereVolumeA = (radius) => (4/3)*Math.PI*(radius ** 3);


const radius1 = 13.5;
console.log(`[NORMAL]: El perimetro de un circulo de radio ${radius1} es ${circlePerimeter(radius1)}`);
console.log(`[ARROW]: El perimetro de un circulo de radio ${radius1} es ${circlePerimeterA(radius1)}`);

const width = 7, height = 10;
console.log(`[NORMAL]: El area de un rectagulo (w:${width}, h:${height}) es ${rectangleArea(width, height)}`);
console.log(`[ARROW]: El area de un rectagulo (w:${width}, h:${height}) es ${rectangleAreaA(width, height)}`);

const n = 37;
console.log(`[NORMAL]: El cuadrado de ${n} es ${square(n)}`);
console.log(`[ARROW]: El cuadrado de ${n} es ${squareA(n)}`);

const cel = 35;
console.log(`[NORMAL]: ${cel}° C son ${celsiusToFahrenheit(cel)}F`);
console.log(`[ARROW]: ${cel}° C son ${celsiusToFahrenheitA(cel)}F`);

const resistance = 13000, current = 2;
console.log(`[NORMAL]: El voltage de una resistecia ${resistance}Ohms y ${current}A es ${calculateVoltage(resistance, current)}V`);
console.log(`[ARROW]: El voltage de una resistecia ${resistance}Ohms y ${current}A es ${calculateVoltageA(resistance, current)}V`);

console.log(`[NORMAL]: El volumen de una esfera de radio ${radius1} es ${getSphereVolume(radius1)}`);
console.log(`[ARROW]: El volumen de una esfera de radio ${radius1} es ${getSphereVolumeA(radius1)}`);