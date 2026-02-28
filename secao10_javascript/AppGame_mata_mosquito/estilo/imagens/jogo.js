

// é necessário q estejam atualizadas sempre que a tela aumente ou diminuia


var altura
var largura

function ajustaTamPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}


ajustaTamPalcoJogo() // tem que chamar a função antes para ter os valores de altura e largura

// criar posições randômicas

// Math.floor == arredondamento para baixo




function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criar o elemento html

    var mosquito = document.createElement('img')

    mosquito.src = '../mosca.png'
    mosquito.className = 'mosquito1'

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}




