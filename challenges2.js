// Desafio 10
function techList (array, name) {
  // Para esse desafio usei uma função JS sort(), que organiza em ordem alfabética os itens de uma array. Source : https://www.w3schools.com/jsref/jsref_sort.asp
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort ();
  let objects = [];
  for (let index = 0; index < array.length; index++) {
    objects.push ({
      tech: array[index],
      name: name,
    });
  }
  return objects;
}
// Desafio 11
function generatePhoneNumber (array) {
  let phoneNumber = '';
  let ddd = '';
  let firstNumbers = '';
  let lastNumbers = '';
  let numeroRepetido = 0;
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index++) {
    // Estava com dúvida sobre como fazer essa parte, mas após pedir ajuda no Slack, descobri o erro dos meus códigos anteriores.
    let numeroDeRepeticoes = 0;
    for (let numero of array) {
      if (index === numero) {
        numeroDeRepeticoes += 1;
      }
      if (numeroDeRepeticoes >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index = 0; index < 2; index++) {
    ddd += array[index];
  }
  phoneNumber += '(' + ddd + ')';
  for (let index = 2; index < 7; index++) {
    firstNumbers += array[index];
  }
  phoneNumber += ' ' + firstNumbers + '-';
  for (let index = 7; index < 11; index++) {
    lastNumbers += array[index];
  }
  phoneNumber += lastNumbers;
  return phoneNumber;
}
// Desafio 12
function triangleCheck (lineA, lineB, lineC) {
  let lineAPossibility;
  let lineBPossibility;
  let lineCPossibility;
  if (lineA < lineB + lineC && lineA > Math.abs (lineB - lineC)) {
    lineAPossibility = true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs (lineA - lineC)) {
    lineBPossibility = true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs (lineA - lineB)) {
    lineCPossibility = true;
  }
  if (
    lineAPossibility === true &&
    lineBPossibility === true &&
    lineCPossibility === true
  ) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate (string) {
  let coposDeAgua = 0;
  // Funções parseFloat, split, isNaN e filter retiradas da Documentação JavaScript Mozilla, código de apoio : Source: https://www.youtube.com/watch?v=X81umaNHnIk
  let stringSeparada = string.split (' '); // Separando a String nos espaços e formando uma array com o retorno
  let numbersInString = stringSeparada.filter (function (element) {
    // Filtrando os números com a função filter usando uma função que retorna true ou false com determinado parametro
    return !isNaN (element); // Checando se uma função é um número retornando True caso seja. Para isso é informado que caso o valor da função isNaN (not a number) seja false (ou seja, o elemento É um número), o valor retornado é true.
  });
  let numbersReal = numbersInString.map (function (valor) {
    // A função .map cria uma nova array baseada em um parametro que retorna valores.
    return parseFloat (valor); // A função parseFloat transforma as Strings que continham números em números. Dessa forma criando uma nova array com números.
  });
  for (let index = 0; index < numbersReal.length; index++) {
    coposDeAgua += numbersReal[index];
  }
  let bebaAgua = '';
  if (coposDeAgua === 1) {
    bebaAgua += coposDeAgua + ' copo de água';
  } else {
    bebaAgua += coposDeAgua + ' copos de água';
  }
  return bebaAgua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
