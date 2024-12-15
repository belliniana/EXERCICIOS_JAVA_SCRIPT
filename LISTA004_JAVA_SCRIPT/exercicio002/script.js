alert ("Algoritimo para saber o maior dos tres numeros inteiros")
var numero1 = Number  (prompt ("Digite o primeiro numero"))
var numero2 = Number (prompt ("Digite o segundo numero"))
var numero3 = Number (prompt ("Digite o terceiro numero"))
if ( numero1 > numero2 && numero1 > numero3){
    alert (`O maior numero e ${numero1}`)
}
else if ( numero2 > numero1 && numero2 > numero3){
    alert (`O maior numero é ${numero2}`)
}
else {
    alert (`O maior numero é ${numero3}`)
}