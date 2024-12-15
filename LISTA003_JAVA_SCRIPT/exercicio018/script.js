alert ("Verificação de letra Maiúscula ou Minúscula")
    if (letra.length !== 1) {
        return "Por favor, insira apenas uma letra.";
    }

    if (letra === letra.toUpperCase()) {
        return "A letra é maiúscula.";
    } else if (letra === letra.toLowerCase()) {
        return "A letra é minúscula.";
    } else {
        return "O caractere inserido não é uma letra.";
    }