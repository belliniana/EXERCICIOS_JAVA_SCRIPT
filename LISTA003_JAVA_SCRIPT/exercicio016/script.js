alert ("Algoritimo para verificar maioridade internacional")
var idade = Number(prompt ("Digite sua idade")) 
if (idade >= 18 && idade <21 ){
    alert ("Voçe  é maior de idade apenas no Brasil no Estados Unidos voçe é menor de idade")
}
else if (idade >= 18 &&  idade >= 21 ){
    alert ("Voçe é maior de idade em todos os países")
}
else {
    alert ("Voçe é menor de idadeem todos os países")
}