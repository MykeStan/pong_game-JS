//CÓDIGOS DA BOLINHA//

//Variáveis da bolinha//
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//Velocidade da bolinha//
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha - raio < 0) 
    { velocidadeXBolinha *= -1; pontosOponente += 1;
    ponto.play(); }
  
  if (xBolinha + raio > width)
    { velocidadeXBolinha *= -1; meusPontos += 1;
    ponto.play(); }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) 
    { velocidadeYBolinha *= -1; }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}