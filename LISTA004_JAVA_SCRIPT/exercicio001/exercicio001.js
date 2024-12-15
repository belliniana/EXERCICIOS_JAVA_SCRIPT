var numerodemacas = Number(prompt("Digite a quantidade de Maçãs:"))

if (numerodemacas <= 12){
    var custototal = precomaca*1.30
    alert (`O custo das Maçãs sem a promoção será de: R$${custototal} `)
}

else{
    var custototal = precomaca*1.00
    alert (`O custo das Maçãs com a promoção será de: R$ ${custototal}`)
} 