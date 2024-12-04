// 1. Algoritmo que realice la suma entre dos numeros dados por el usuario
function suma(){
    // Pedimos los numero al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));
    console.log(`La suma es ${numero1 + numero2}`);
    alert(`La suma es ${numero1 + numero2}`);
}

// 2. Algoritmo que determina la suma, resta, multiplicacion y division de dos numeros datos por el usuario
function operacionMatematicas(){
    // Se piden los valores al usurio
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    // Hacemos las respectivas operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    // Se muestran los resultados por pantalla
    console.log(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
    alert(`La suma es = ${suma}, la resta es = ${resta}, la multiplicacion es = ${multiplicacion}, la division es = ${division}`);
}

// 3. Algoritmo que calcula el cuadrado de un numero dado por el usuario
function cuadrado(){
    // Pedimo el numero al usuario
    let numero = parseInt(prompt('Ingrese un numero: '));

    // Se imprimen los resultados por pantalla
    console.log(`El cuadrado es ${numero**2}`);
    alert(`El cuadrado es ${numero**2}`);

}

// 4. Algoritmo que determine el area de un triagunlo a partir de la base y la altura ingresada por el usuario
function areaTriangulo(){
    // Se le piden los datos al usuario
    let base = parseInt(prompt("Ingrese la medida de la base del triangulo en cm: "));
    let altura = parseInt(prompt("Ingrese la medida de la altura del triangulo en cm: "));

    // Se pocesan los datos
    let area = (base * altura) / 2;

    // Se imprimen los resultados
    console.log(`El triangulo tiene un area de ${area}cm.`);
    alert(`El triangulo tiene un area de ${area}cm.`);
}


// 5. Algoruitmo que determine la conversion en kilometros, pulgadas y metros de un valor dado en centuimetros por el usuario
function conversionMedidas(){
    // Se le pide el valor en centimetros al usuario
    let medida = parseInt(prompt('Ingrese la medida en centimetros(cm): '));

    // Se calcula la conversion de las demas medidad
    let kilometros = medida * 0.00001;
    let pulgadas = medida * 0.3937;
    let metro = medida * 0.01;

    // Se imprimer los resultados
    console.log(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);
    alert(`${medida}cm son: ${kilometros}km, ${pulgadas}in, ${metro}m`);

}

// 6. Algoritmo que determine el numero mayor entre dos numeros dados por el usuario
function numeroMayor() {
    // Solicitar números al usuario
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    // Validar si los valores son números
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    // Comparar los números e indicar el mayor
    if (numero1 > numero2) {
        alert(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        alert(`El número mayor es: ${numero2}`);
    } else {
        alert("Ambos números son iguales.");
    }
}




function mayorTresNumeros() {
    // Solicitar números al usuario
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

    // Validar si los valores son números
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Por favor, ingresa valores numéricos válidos.");
        return;
    }

    // Comparar los números para encontrar el mayor
    let mayor;
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
    } else {
        mayor = numero3;
    }

    // Mostrar el resultado
    alert(`El número mayor es: ${mayor}`);
}


// 8. Algoritmo que solicite al estudiante su nombre, la materia y 8 calificaciones de la misma
// Las calificaciones tienen un valor entre 1 y 10. Con la informacion proporcionada por el usuario
// Determinar si este aprovo la materia o no, teniendo en cuenta que se aprueba con 6.2
function aprovarMateria(){
    const numeroNotas = 8; // Se define una constante del numero de notas
    
    // Se le piden los datos al usuario
    let nombre = prompt('Ingrese su nombre: ');
    let materia = prompt('Ingrese el nombre de la materia: ')

    // Se declara una variable promedio para sumar las notas
    let promedio = 0; 
    
    // Se itera con un ciclo for para pedir las notas al usuario y sumarlas al promedio
    for (let i = 0; i < numeroNotas;  i++){
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}`));
        promedio += nota;    
    }

    // Se calcula el promedio
    promedio /= numeroNotas;

    // Se verifica si el estudiante aprovo o desaprovo la materia
    if (promedio < 6.2){
        prompt(`${nombre}  no aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)
    }
    else{
        prompt(`${nombre} felicidades aprovaste la materia ${materia}. Tu promedio fue de ${promedio}`)

    }  

}

// 9. Algoritmo que determina si un numero ingresado por un usuario es par o impar
function parImpar(){
    // Le pedimos el numero al usuario
    let numero = parseInt(prompt('Ingresa el numero'));

    // Se hace la verificacion y se imprime el mensaje correspondiente
    if (numero % 2 != 0){
        alert('El numero es impar.');
    }
    else{
        alert('El numero es par');
    }
}

function calcularBeneficio() {
    // Solicitar datos al usuario
    let capitalInicial = parseFloat(prompt("Ingresa el capital inicial a invertir:"));
    let anos = parseInt(prompt("Ingresa el número de años que deseas invertir:"));

    // Validar entradas
    if (isNaN(capitalInicial) || capitalInicial <= 0 || isNaN(anos) || anos <= 0) {
        alert("Por favor, ingresa valores numéricos válidos y mayores a cero.");
        return;
    }

    // Calcular interés mensual y total de meses
    const interesMensual = 0.007; // 0.7% mensual
    const meses = anos * 12;

    // Cálculo del monto final usando interés compuesto
    const montoFinal = capitalInicial * Math.pow(1 + interesMensual, meses);

    // Mostrar resultados
    alert(`Después de ${anos} años, el monto total será: $${montoFinal.toFixed(2)}\nTu ganancia será: $${(montoFinal - capitalInicial).toFixed(2)}`);
}


// 11. Algorimo que muestre los numero intermedios entre el rango de 2 numeros dados por el usuario
function rangoNumeros(){
    // se piden los datos al usuario
    let numero1 = parseInt(prompt('Ingrese el primer numero: '));
    let numero2 = parseInt(prompt('Ingrese el segundo numero: '));

    let numeros = ""
    // Se imprimen los numero intermedios
    for (let numero=numero1 + 1; numero < numero2; numero ++){
        numeros += `${numero}, `;
    }

    alert(numeros)
}

// 12. Algoritmo que devuelva el resultado del factorial de un numero dado por el usuario
function factorialNumero(){
    // Se le piden los datos l usuario
    let numero = parseInt(prompt('Ingresa numero: '));
    
    alert(`El factorial es ${factorial(numero)}`);
}

function factorial(numero){
    if (numero === 1){
        return numero;
    }
    return numero * factorial(numero - 1);
}

// 13. Algoritmo que convierta un numero decimal a uno binario
function binario(){
    // Se le piden los datos al usuario
    let numero = parseInt(prompt('Ingresa un numero: '));

    // Se hace la conversion
    let bin = [];
    while (numero >= 1){
        bin.unshift(numero % 2);
        numero = Math.floor(numero / 2);

    }

    // Se muestra el resultado
    alert(`El numero en binario es: ${bin.join("")}`);
}


function celsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

    if (isNaN(celsius)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    alert(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
}

function contarVocales() {
    let frase = prompt("Ingresa una frase:");

    if (!frase) {
        alert("Por favor, ingresa una frase válida.");
        return;
    }

    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of frase) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    alert(`La frase ingresada contiene ${contador} vocal(es).`);
}

function tablaDeMultiplicar() {
    let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let tabla = `Tabla de multiplicar del ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(tabla);
}


