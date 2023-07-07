//ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;

let pontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor () {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}



function verificaColisao () {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15);
    if (colisao) {
      voltaAtor();
      somColisao.play();
      tiraPonto();
    }
  }
  
}

function voltaAtor() {
  yAtor = 366;
}

function incluiPontos () {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0))
  text(pontos, 100, 27);
}

function marcaPonto () {
  if (yAtor < 15) {
    pontos += 1;
    somPonto.play();
    voltaAtor();
  }
}

function tiraPonto () {
  if (pontos > 0) {
    pontos -= 1;
  }
}

function podeSeMover() {
  return yAtor < 366;
}