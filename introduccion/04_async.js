// Funcion simple
let getNombre = () => {
    return 'José';
}

// Funcion Promise
let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        resolve('Jose')
    })
}

// Funcion con Async
let getNombre3 = async () => {
    throw new Error('No existe un nombre para ese usuario')
    return 'José'
}

console.log( getNombre() )
console.log( getNombre2() )
console.log( getNombre3() )

// Llamar a una promesa usando async
getNombre3().then(nombre => {
    console.log(nombre)
})

// Llamar a async con error
getNombre3().then(nombre => {
    console.log(nombre)
}).catch(e => {
    console.log(`Error en la funcion async. ${e}`)
})