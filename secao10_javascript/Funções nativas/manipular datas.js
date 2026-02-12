// Funções nativas para manipular Datas

// Date

var data = new Date() // pega a localdate do sistema com fuso horário

console.log(data)

console.log(data.getDate()) // pega o dia

console.log(data.getMonth()) // pega o mes

console.log(data.getFullYear()) // pega o ano

console.log(data.getSeconds()) // pega os segundos

console.log(data.getTime()) // retorna o valor numérico que representa o timestamp da data, ou seja, a quantidade de milissegundos decorridos desde 1º de janeiro de 1970, 00:00:00 UTC (o marco “Epoch time”).


console.log('------ Praticando um pouco mais com datas ------')

// praticando um pouco mais com datas

// adcionar ou remover dias da data

console.log(data.toString())
console.log('-------Adicionando um dia')

data.setDate(data.getDate() + 1)

console.log(data)

console.log('-------Removendo um dia')

data.setDate(data.getDate() - 1)

console.log(data)


// para meses seria getMounth e setMounth


// para anos seria GetFullYear e setFullYear



// Como fazer o cálculo entre datas diferentes

// datas de exemplo:

// 15/01/2017

// 23/02/2017

// var d = new Date(year,mounth,day,hours,minutes,seconds,milliseconds)

// obs: em JS os meses vão de 0 a 11 janeiro = 0 e sucetivamente


console.log('*********')

var data1 = new Date(2017, 0, 15)

var data2 = new Date(2017, 1, 23)

console.log(data1)

console.log('*********')

console.log(data2)

// covertendo datas para algo que possamos calcular. utilizando metodo getTime()

console.log('getTime() quantidade de millisegundos *********')

console.log(data1.getTime())

console.log('*********')

console.log(data2.getTime())

// encontrar a quantidade de milisegundos entre data 1 e 2

console.log('********* encontrar a quantidade de millisegundos entre data 1 e 2')

// Math.abs() retorna um valor absoluto

console.log(Math.abs(data1.getTime() - data2.getTime()))

// descobri quantos dias esses milisegundos representam

var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())

var milisegundos_por_dia = (1*24*60*60*1000)

console.log('-----------')

console.log(Math.ceil(milisegundos_entre_datas / milisegundos_por_dia) + ' dias')