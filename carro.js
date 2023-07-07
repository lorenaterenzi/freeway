let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


function mostraCarro () {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velCarros [i];
  }
}

function voltaPosicaoInicial () {
  for (let i = 0; i < xCarros.length; i++) {
    if (passouDaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
 }
}

function passouDaTela (xCarro) {
  return xCarro < -50;
}

