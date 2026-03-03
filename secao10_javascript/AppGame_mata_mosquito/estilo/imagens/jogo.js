

// é necessário q estejam atualizadas sempre que a tela aumente ou diminuia


var altura
var largura

var vidas = 1

function ajustaTamPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}


ajustaTamPalcoJogo() // tem que chamar a função antes para ter os valores de altura e largura

// criar posições randômicas

// Math.floor == arredondamento para baixo




function posicaoRandomica() {

    //remover mosq anterior

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            // logica de game over
            
        } else{
              document.getElementById('v' + vidas).src="../coracao_vazio.png"
        }

      

        vidas++
    }



    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criar o elemento html
    var mosquito = document.createElement('img')

    mosquito.src = '../mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    mosquito.style.position = 'absolute'

    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

    
}


    // tamanhos randomicos para o mosquito

    function tamanhoAleatorio(){
        var classe = Math.floor(Math.random() * 3)

        switch(classe){

            case 0:
                return 'mosquito1'

            case 1:
                return 'mosquito2'

            case 2:
                return 'mosquito3'
        }
    }



    // orietação da imagem tbm de modo aleatorio (olhando para esquerda ou direita)

    function ladoAleatorio(){

        var classeEscala = Math.floor(Math.random() * 2)

        switch(classeEscala){

            case 0:
                return 'ladoA'

            case 1:
                return 'ladoB'

            
        }

    }
