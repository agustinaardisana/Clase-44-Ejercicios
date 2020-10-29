//Crear pir'amide con un while
let primerRenglon = ''
let contador = 0

while (contador < 9) {
    primerRenglon += '*'
    contador++
    console.log(primerRenglon)
}

// obtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array 
//y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
const obtenerIndice = (valor, array) => {
    return array.indexOf(valor, array)
}
console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]))


// repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad,
// y devuelva una array con valor repetido cantidad de veces.
const repetir = (valor, cantidad) => {
    let arreglo = []
    for (i = 0; i < cantidad; i++) {
        arreglo.push(valor)
    }
    return arreglo
}


console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
console.log(repetir('html', 0)) // []

// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero 
//y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero) => {
    let resultadoSuma = 0
    for (i = 1; i <= numero; i += 2) {
        //console.log(resultadoSuma += i)
        resultadoSuma += i
    }
    return resultadoSuma
}

console.log(sumarImparesHasta(5)) // 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)) // 49
console.log(sumarImparesHasta(47)) // 576

// crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial 
//y que devuelva un array con cuyo primer ítem sea numeroInicial 
//y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

const crearCuentaRegresiva = (numeroInicial) => {
    let arreglo = []
    let contador = numeroInicial
    for (i = 0; i <= numeroInicial; i++) {
        arreglo.push(contador--)
    }
    return arreglo
}

console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]

// 🏃‍♀️ Carrera
// Crear un programa para controlar las vueltas de una deportista. 
//Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. 
//Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas 
//(suma de las vueltas / cantidad de vueltas). Ejemplo:

// Cantidad de vueltas: 3
// Vuelta 1: 133s
// Vuelta 2: 145s
// Vuelta 3: 166s
// ⏱ Promedio: 144.45s
// let pedirCantidadVueltas = prompt(`Ingrese la cantidad de vueltas a realizar`)

// const controlarVueltas = () => {
//     let inputCantidadVueltas = Number(pedirCantidadVueltas)
//     let lineaDeTexto = ``
//     let sumaDuracionVueltas = 0
//     let promedio = 0
//     for (i = 0; i < inputCantidadVueltas; i++) {
//         let pedirDuracionVueltas = prompt(`Ingrese el tiempo de cada vuelta (en segundos)`)
//         let inputDuracionVueltas = Number(pedirDuracionVueltas)
//         //console.log(inputDuracionVueltas)
//         lineaDeTexto += `
//         Vuelta ${i + 1}: ${inputDuracionVueltas}s`
//         //console.log(lineaDeTexto)
//         sumaDuracionVueltas += inputDuracionVueltas
//         //console.log(sumaDuracionVueltas)
//         promedio += (inputDuracionVueltas / inputCantidadVueltas)
//         //console.log(promedio)

//     }
//     const crearMensaje = alert(`
//     Cantidad de vueltas: ${inputCantidadVueltas}
//     ${lineaDeTexto}
//     ⏱ Promedio: ${promedio}s
//     `)
// }
// console.log(controlarVueltas())


// 🔐 Múltiples intentos
// Crear un programa que pida ingresar usuario y contraseña. 
//El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
//Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
//Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. 
//El usuario y la contraseña ya deben estar guardadas en variables.

const nombreUsuario = 'usuario'
const contrasenia = 'usuario1234'
const ingresarUsuario = prompt(`Ingrese su nombre de usuario`)
const ingresarContrasenia = prompt(`Ingrese su contraseña`)
let numeroDeIntentos = 0

const multiplesIntentos = () => {
    while (numeroDeIntentos < 2) {
        const ingresarUsuario = prompt(`Ingrese su nombre de usuario`)
        const ingresarContrasenia = prompt(`Ingrese su contraseña`)
        numeroDeIntentos++
        validarIngreso()
    }
    return alert('Este es un mensaje de error')
}

const validarIngreso = () => {
    if (ingresarUsuario === nombreUsuario && ingresarContrasenia === contrasenia) {
        alert('Este es un mensaje de bienvenida')
    }
    else {
        multiplesIntentos()
        //return alert('Este es un mensaje de error')
    }
}

console.log(multiplesIntentos())



