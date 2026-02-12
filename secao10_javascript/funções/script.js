// Função introdução

// tipos
// void -- não retornam 'nada'
// retorno




function calcularAreaterreno(largura, comprimento){

    var area = largura * comprimento // o var neste caso terá um escopo local dentro da função !

    return area

}

var resultado = calcularAreaterreno(15, 25)


console.log(resultado)


// Funções flexibilidade de parãmetros

// em javascript as funções podem receber mais ou menos parâmentros sem retornar  erro

// exemplo:

function soma(a, b) {

    return a + b

    // poderiamos evitar de ter B como undefined com:

    // b = b === undefined ? 0 : b

}

 console.log(soma(7, 7))

 // passar mais parâmetros
 
 console.log(soma(7, 7, 9, 15)) // ele descarta os demais parâmetros sem retornar erro


 // passando menos parâmetros

  console.log(soma(7)) // retorna NaN, ficaria algo como 7 + b(undefined) = NaN


  // se chamarmos a função sem parâmetro nenhum também retornara um NaN pois seria undefined + undefined 

  console.log(soma())

  // podemos também passar uma quantidade indefinida de parâmentros e recebe-los na função

    // para isso será necessários arrays e loops de interação

/*
  console.log(subtr(?))

  function subtr(?){

  } */

  // ESCOPO DE VARIÁVEIS

  // 3 Escopos: Global, função e o de bloco

  //  Global: var serie = 'lost' . essa variável poderá ser acessada por todo o código

  // escopo de bloco
  /*
    if(true){
        var serie2 = 'GOT'
    }

    neste caso irá fazer uma elevação de escopo (Rosting), a variável podera ser acessada fora do bloco

    // escopo de função

    funtion x()
    {
    var serie3= 'TWD'
    
    }

    a variável dentro da função está disponível apenas dentro da função

    // não sofrera elevação
  */ 

