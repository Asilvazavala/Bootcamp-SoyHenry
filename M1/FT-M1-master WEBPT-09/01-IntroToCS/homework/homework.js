'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let binarioArray = num.toString().split('');
let binarioANumero = 0;
let contador = 1;

for (let i = binarioArray.length - 1; i >= 0; i--) {
  binarioANumero += (parseInt(binarioArray[i]) * contador);
  contador *= 2;
}
  return binarioANumero; 
}


function DecimalABinario(num) {
  // tu codigo aca
let numeroABinario = [];

for (let i = num; i > 1; i = i/2) {
    numeroABinario.unshift(Math.floor(i % 2));
}
  if (numeroABinario.includes(1) === false) {
    numeroABinario.unshift(1)
  }
  return numeroABinario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}