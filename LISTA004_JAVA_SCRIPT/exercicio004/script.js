alert ("Algoritimo para classificar a temperatura")
var temperatura = Number (prompt ("Digite a temperatura em graus celsius"))
if (temperatura < 0){
    alert (`A temperatura esta muito frio`)
    }
else if (temperatura == 0 && temperatura < 20){
    alert (`A temperatura é fria`)
}
else if (temperatura >= 21 && temperatura <= 30){
    alert (`A temperatura é agradavel`)
}
else if (temperatura > 31 && temperatura <= 40){
    alert (`A temperatura é quente`)
}