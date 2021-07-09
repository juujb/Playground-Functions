// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) { // Função split() estudada através da documentação Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let repeticoes = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maiorNumero) {
      maiorNumero = arrayNumeros[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumeros.length; index2 += 1) {
    if (maiorNumero === arrayNumeros[index2]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //  Função retirada da Documentação Mozilla Source:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (Math.abs (Math.abs (cat1 - mouse)) < Math.abs (cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs (cat1 - mouse) > Math.abs (cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let retorno = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      retorno.push ('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      retorno.push ('fizz');
    } else if (array[index] % 5 === 0) {
      retorno.push ('buzz');
    } else {
      retorno.push ('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] === 'a') {
      encoded += '1';
    } else if (string[index] === 'e') {
      encoded += '2';
    } else if (string[index] === 'i') {
      encoded += '3';
    } else if (string[index] === 'o') {
      encoded += '4';
    } else if (string[index] === 'u') {
      encoded += '5';
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}

function decode (string) {
  let decoded = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '1') {
      decoded += 'a';
    } else if (string[index] === '2') {
      decoded += 'e';
    } else if (string[index] === '3') {
      decoded += 'i';
    } else if (string[index] === '4') {
      decoded += 'o';
    } else if (string[index] === '5') {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
