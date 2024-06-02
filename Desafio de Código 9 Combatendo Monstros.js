var jogadaPersonagem = parseInt(prompt("Digite a jogada do personagem:"));
var jogadaMonstro = parseInt(prompt("Digite a jogada do monstro:"));

function realizarCombate(jogadaPersonagem, jogadaMonstro) {
    if (jogadaPersonagem > jogadaMonstro) {
        return "Você venceu a batalha!";
    } else if (jogadaPersonagem < jogadaMonstro) {
        return "Você perdeu a batalha!";
    } else {
        return "Foi um empate!";
    }
}

var resultado = realizarCombate(jogadaPersonagem, jogadaMonstro);

console.log(resultado);

// jogadaPersonagem = 5
// jogadaMonstro = 1
//Você venceu a batalha!