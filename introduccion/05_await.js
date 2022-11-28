let getArea = (lado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(lado * 3)
        }, 2000)
    })
}

/**
 * Funcion Async/Await
 */
let getVolumen = async (altura) => {
    let area = await getArea(3)
    let volumen = area * altura
    return `El volumen es ${volumen}`
}

getVolumen(2)
    .then(resultado => console.log(resultado))
    .catch(e => console.log('Error al calcular el area'))