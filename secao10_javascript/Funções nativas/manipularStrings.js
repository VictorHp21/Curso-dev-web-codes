// Funções nativas para manipular Strings

// propriedade length > quantidade de caracteres de uma string.

console.log('Jorge Sant Ana'.length) // começa no indice 0 assim como em um array.

// charAt() > retorna a posição especifica de um caracter dentro de sua cadeia.

console.log('Jorge Sant Ana'.charAt(7))

// indexOf() > retona a primeira ocorrência de um valor dentro de uma string.

var nome = ' Jorge Sant Ana '

console.log(nome.indexOf('g')) // faz a distinção entre maiusculos e minusculo -- CaseSensitive.

// replace() > Com base em um valor de pesquisa e modificação, substituir textos em uma String.


console.log(nome.replace('Sant Ana', 'Silva'))

// substr() > Permite extrair parte de uma string com base em um valor inicial, seguida de um valor que representa a quantidade de caracteres a frente daquela posição inicial. 'Recorta uma parte da string'. 

// depreciada, pesquisar qual usar no lugar

console.log(nome.substr(6, 8))

// toLowerCase() e toUpperCase() > respectivamente passar para minusculas ou maiusculas

console.log(nome.toLowerCase())

console.log(nome.toUpperCase())

// trim() > remove os espaços em branco das extremidades de uma string

console.log(nome.trim())