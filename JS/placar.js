// Variáveis dos Pontos//
let meusPontos = 0;
let pontosOponente = 0 ;

// Aumenta a chance de errar//
let chanceDeErrar;

let colidiu = false;

function incluirPlacar () {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0, 255,  0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 0, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}