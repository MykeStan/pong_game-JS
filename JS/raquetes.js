//CÓDIGOS DAS RAQUETES//

//Velocidade da Raquete//
let velocidadeYRaquete2;

//Variáveis da raquete//
let xRaquete = 5;
let xRaquete2 = 585;
let yRaquete = 150;
let yRaquete2 = 150;
let wRaquete = 10;
let hRaquete = 90;

function mostraRaquete(x, y) {
  rect(x, y, wRaquete, hRaquete);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
}

function movimentaMinhaRaquete2() {
  if (keyIsDown(87)) {
    yRaquete2 -= 5;
  }
  if (keyIsDown(83)) {
    yRaquete2 += 5;
  }
}

function movimentaRaquete2 () {
  velocidadeYRaquete2 = yBolinha - yRaquete2 - wRaquete/2 - 50;
  yRaquete2 += velocidadeYRaquete2
}

function verificaColisaoRaqueteBolinha () {
  if  (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete)  {
        velocidadeXBolinha *= -1
        raquetada.play();
  }
}
function verificaColisaoRaquete2Bolinha () {
  if  (xBolinha + raio < xRaquete2 - wRaquete && yBolinha + raio > yRaquete2 - hRaquete && yBolinha - raio < yRaquete2)  {
        velocidadeXBolinha *= -1
        raquetada.play();
  }
}

function colisaoMinhaRaqueteBiblioteca (x,y) {
  colidiu = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu) { 
                 velocidadeXBolinha *= -1;
                 raquetada.play();         }
}