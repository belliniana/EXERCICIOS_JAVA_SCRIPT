alert ("Algoritimo para verificar o tempo")
var hora  = Number (prompt ("Digite que horas são, para saber qual o periodo "))
if (hora >= 5 && hora <11 ){
    alert ("Bom dia")
}
else if (hora >= 12 && hora <17 ){
    alert ("Boa tarde")
}
else if  (hora >= 18 && hora <23 ){
    alert ("Boa noite")
}
else {
    alert ("Boa madrugada")
}