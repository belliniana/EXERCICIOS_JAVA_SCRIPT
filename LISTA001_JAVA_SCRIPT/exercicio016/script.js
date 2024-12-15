alert ("Algoritimo tabuada")
var numero = parseInt(prompt("Digite um número para ver a tabuada:"));
var resultado = "";
    for (var i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
}
alert(resultado);