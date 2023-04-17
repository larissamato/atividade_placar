const formPalpite = document.querySelector('#form-palpite');
const inputPalpiteBrasil = document.querySelector('#palpite-brasil');
const inputPalpiteAlemanha = document.querySelector('#palpite-alemanha');
const btnPalpite = document.querySelector('#btn-palpite');
const btnReiniciar = document.querySelector('#btn-reiniciar');
const resultado = document.querySelector('#resultado');

let golsBrasil = 0;
let golsAlemanha = 0;
let palpitesRestantes = 10;

function atualizarResultado() {
  if (palpitesRestantes === 0) {
    resultado.textContent = `Você perdeu. O placar correto era Brasil ${golsBrasil} x ${golsAlemanha} Alemanha.`;
    inputPalpiteBrasil.disabled = true;
    inputPalpiteAlemanha.disabled = true;
    btnPalpite.disabled = true;
    btnReiniciar.disabled = false;
  } else {
    const palpiteBrasil = Number(inputPalpiteBrasil.value);
    const palpiteAlemanha = Number(inputPalpiteAlemanha.value);
    if (palpiteBrasil === golsBrasil && palpiteAlemanha === golsAlemanha) {
      resultado.textContent = 'Parabéns, você acertou o placar!';
      inputPalpiteBrasil.disabled = true;
    }
  }
}
