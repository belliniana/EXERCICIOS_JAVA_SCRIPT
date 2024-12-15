alert("Algoritmo para fazer desconto em uma compra");
    
var preco = Number(prompt("Digite o preço da compra:"));
var cupom = prompt("Digite o cupom de desconto:");

if (cupom === "DESC10") {
    var desconto = preco * 0.10
    var precoComDesconto = preco - desconto
    alert(`Você ganhou um desconto de 10%! O preço final é R$ ${precoComDesconto.toFixed(2)}`)
} 
else {
    alert(`Cupom inválido. O preço permanece R$ ${preco.toFixed(2)}`);
}