//CÓDIGOS DOS SONS//

let raquetada;
let ponto;
let theme;

function preload() {
  theme = loadSound("Sons/guileTheme.mp3");
  ponto = loadSound("Sons/ponto.mp3");
  raquetada = loadSound("Sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  theme.loop();
}
//Bibliotecas//

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaMinhaRaquete();
  //movimentaMinhaRaquete2() //Dois Players//
  movimentaRaquete2();   //Um Player//
  //verificaColisaoRaqueteBolinha();
  //verificaColisaoRaquete2Bolinha (); //Necessita Ajuste//
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaquete2, yRaquete2);
  calculaChanceDeErrar();
  incluirPlacar();
  bolinhaNaoFicaPresa();
}