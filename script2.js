// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.



let family = {
    incomes: [4000, 2300, 335, 32.59, 69, 90],
    expenses: [32.54, 349.54, 190, 1240, 50]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpensive = sum(family.expenses)

    const totalCalc = calculateIncomes - calculateExpensive
    const totalGood = totalCalc >= 0

    let balanceText = "Saldo negativo!"

    if (totalGood) {
        balanceText = "Saldo Positivo!"
    }

    console.log(`Seu saldo é ${balanceText}: R$${totalCalc.toFixed(2)}`)
}

calculateBalance()