var valor = Number(prompt("Digite um valor:"))
var valoremreal = valor.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});

alert(`O valor ${valor} em Real é = ${valoremreal}`)