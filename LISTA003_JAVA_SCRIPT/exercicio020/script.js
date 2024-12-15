alert ("Algoritimo para ver se um produto e caro ou barato")
var preco = Number (prompt ("Digite o preco do produto"))
if (preco < 20){
    alert ("O produto e barato")
}
else if (preco < 100){
    alert ("O produto e caro")
}
else {
    alert ("O produto e muito caro")
}