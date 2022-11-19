function sum(array){
    let total = 0
    for (let value of array){
        total += value
    }
    return total
}

function calcBalance(income, expenses){
    let saldo = 0
    const totalIncome = sum(income)
    const totalExpenses = sum(expenses)
    saldo = totalIncome - totalExpenses
    
    const situacaoSaldo = saldo >=0
    if (situacaoSaldo){
        document.write('Seu saldo está positivo: ' + saldo + 'R$')
    }
    else{
        document.write('Seu saldo está negativo: ' + saldo + 'R$') 
    }
}

