alert ("Algoritimo para  calcular a media de valores com moeda brasileira")
var valor1 = prompt ("Digite o primeiro valor")
var valor2 = prompt ("Digite o segundo valor")
var valor3 = prompt ("Digite o terceito valor")
var media = (valor1 + valor2 + valor3) / 3
var mediaFormatada = media.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits: 2})
alert (`A media é ${mediaFormatada}`)