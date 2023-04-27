// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

//transfDegree(50ºF)

function transfDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Temperatura não identificada')
    }

    if (fahrenheitExists) {
        //transform F to C
        let updDegree = Number(degree.toUpperCase().replace("F", ""));
        let calculate = (farenheit) => (farenheit - 32) * 5 / 9
        let transfSignDegree = 'C'

        return calculate(updDegree) + transfSignDegree
    } else {
        const celsiusExists = degree.toUpperCase().includes('C')
        const fahrenheitExists = degree.toUpperCase().includes('F')

        if (!celsiusExists && !fahrenheitExists) {
            throw new Error('Temperatura não identificada')
        }

        //transform C to F
        let updDegree2 = Number(degree.toUpperCase().replace("C", ""));
        let calculate2 = (celsius) => celsius * 9 / 5 + 32
        let transfSignDegree2 = 'F'

        return calculate2(updDegree2) + transfSignDegree2
    }
}
try {
    console.log(transfDegree('50F'))
    console.log(transfDegree('38C'))
    //transfDegree('50T')
} catch (error) {
    console.log(error.message)
}
