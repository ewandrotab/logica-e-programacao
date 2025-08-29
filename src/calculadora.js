function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2
    return resultado
}

function calcularMediaDeDoisNumeros(valor1, valor2) {

    // 1. Soma todos os valoes
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2)

    // 2. Divide pela quantidade de números passados
    const resultadoMediaDeDoisValores = resultadoSomaDeDoisValores / 2

    // 3. Retornar o resultado
    return resultadoMediaDeDoisValores
}

module.exports = {
    somarDoisNumeros
}