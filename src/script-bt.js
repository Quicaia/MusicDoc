
//Cria exercicio para manipulação da DOM

let titulo= document.querySelector('.my-4');
let linha = document.querySelectorAll('td')
//console.log(titulo.textContent);

//titulo.textContent = 'Manipulada DOM';

console.log(linha);
linha.forEach((item, index) => {
    //console.log(item.textContent);
    if (index % 2 == 0) {
        item.style.backgroundColor = 'lightblue';
    } else {
        item.style.backgroundColor = 'lightgreen';
    }
});

// explica a função  da forEach: 
// forEach é um método de array que executa uma função para cada elemento do array.
// Neste caso, estamos iterando sobre cada item da NodeList retornada por querySelectorAll