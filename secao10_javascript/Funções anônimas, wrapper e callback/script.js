// Funções ANÔNIMAS -- não possuem nome

var exibirSaudacao = function(nome) {
    console.log('Olá ' + nome + ', tudo bem?')
}

// variável recebe a função anônima

//wrapper -- como chamar essa função

// Em JavaScript, um wrapper é um objeto que envolve (encapsula) um tipo primitivo — como String, Number ou Boolean — permitindo usar métodos e propriedades nesses valores simples.Em JavaScript, um wrapper é um objeto que envolve (encapsula) um tipo primitivo — como String, Number ou Boolean — permitindo usar métodos e propriedades nesses valores simples.

// neste caso cria uma função anônima wrapper, armazenada dentro de uma variável.

exibirSaudacao('Victor')


// Funções de CALLBACK

// São funções encaminhadas como parãmetro para outras funções

/*Exemplo:

function exibirArtigo(id, callbackSucesso, callbackErro)

// lógica para recuperar o artigo com base no id

if(?) {
    callbackSucesso('Titulo', 'descrição')
} else {
    callbackErro('Erro')
    }

*/ 

// prática

function exibirArtigo(id, callbackSucesso, callbackErro){
    //lógica: recuperar o id via requisição HTTP

    if (true){
        callbackSucesso('Titulo', 'Descrição')
    } else {
        callbackErro('Erro')
    }

}

// usando wrapper

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro){
    document.write('<p><b>Erro: </b>' + erro + '</p>')
}

// sem abri e fecha parenteses pois estamos encaminhando a referência da função

exibirArtigo(1, callbackSucesso, callbackErro)