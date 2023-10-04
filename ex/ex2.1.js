const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mis on hetkel 6hutemperatuur? ', temp => {
  if (parseFloat(temp) <= 4) {
    console.log('On j22tumise oht');
  }
  else if (temp > 4) {
    console.log('J22tumise ohtu pole');
  }
    readline.close();
  });