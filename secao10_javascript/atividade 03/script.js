

var operacao = false

while (operacao != true) {
    var num1 = Number(prompt('Digite o número 1: '))

    var num2 = Number(prompt('Digite o número 2: '))

    var op = prompt('digite soma ou subtracao')

    console.log(op)

    var resultado = 0;

    if (op === 'soma') {
        resultado = num1 + num2

        operacao = true
    } else if (op === 'subtracao') {
        resultado = num1 - num2

        operacao = true
        
    } else {
        alert('escolha uma operação válida!')
    }

    

}

alert(resultado)

