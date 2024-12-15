alert ("Algoritimo para calcular o IMC")
var altura = Number (prompt ("Digite  sua altura"))
var peso = Number (prompt ("Digite  seu peso"))
var verificaIMC = peso / (altura**2)
if (verificaIMC < 18.5 ){
    alert ("Voçe está abaixo do peso")
}
else if (verificaIMC < 25 ){
    alert ("Voçe está no peso ideal")
}
else if (verificaIMC  < 30 ){
    alert ("Voçe está acima do peso")
}
else if (verificaIMC   < 40 ){
    alert ("Voçe está obeso")
}