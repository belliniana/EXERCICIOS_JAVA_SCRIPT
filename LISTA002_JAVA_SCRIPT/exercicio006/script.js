alert ("Algoritimo para exibir o primeiro nome em maiusculas e contar as letras")
    var nome = prompt ("Digite o nome")
    var nomeMinusculo = nome.toLowerCase()
    var nomeSeparado = nomeMinusculo.split(" ")
    var primeiroNome = nomeSeparado[0]
    var primeiroNomeSeparado = primeiroNome.split("");
    var primeiroNomeSeparado2 = primeiroNomeSeparado.length
    var primeiroNomeMaiusculo = primeiroNome.toUpperCase()
    alert (`O primeiro nome em maiusculo é ${primeiroNomeMaiusculo} O primeiro nome tem ${primeiroNomeSeparado2} letras`)