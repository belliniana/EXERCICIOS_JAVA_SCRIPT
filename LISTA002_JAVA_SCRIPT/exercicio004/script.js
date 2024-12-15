alert ("Algoritimo de contar o numero de letras no primeiro nome")
var nome = prompt ("Digite o nome")
var nomeMinusculo = nome.toLowerCase()
var nomeSeparado = nomeMinusculo.split(" ")
var primeiroNome = nomeSeparado[0]
var primeiroNomeSeparado = primeiroNome.split("");
var primeiroNomeSeparado2 = primeiroNomeSeparado.length
alert (`O primeiro nome tem ${primeiroNomeSeparado2} letras`)