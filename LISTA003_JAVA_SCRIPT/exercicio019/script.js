alert ("Algoritimo para calcular a media de notas")
var nota1 = Number (prompt ("Digite a nota da sua primeira prova"))
var nota2 = Number (prompt ("Digite a nota da sua segunda prova"))
var nota3 = Number (prompt ("Digite a nota da sua terceira prova"))
var media = (nota1 + nota2 + nota3) / 3
if  (media >= 7){
    alert ("Voçe foi aprovado")
}
else {
    alert ("Voçe foi reprovado")
}