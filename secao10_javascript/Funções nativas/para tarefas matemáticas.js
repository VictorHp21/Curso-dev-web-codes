// Funções nativas para tarefas matemáticas

//Math

var x = 10.380

// arredondar para cima > Math.ceil()

console.log(Math.ceil(x))

// arredondar para baixo floor()

console.log(Math.floor(x))

// arredondamento para uma média dependendo do valor (média da fração)

// Math.round faz o peso do número fracionado para saber se deve arredondar para cima ou para baixo ( >= 10,5  arredonda para cima, <= 10,4 arredonda para baixo)

var y = 10.580

console.log(Math.round(y))

console.log(Math.round(x))


// random() > fornece um número aleatorio entre 0 e 1

var z = Math.random()

console.log(z)
