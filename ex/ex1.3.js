const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta astme alus: ', astmeAlus => {
  readline.question('Sisesta astendaja: ', astendaja => {
    result = Math.pow(astmeAlus, astendaja);
    console.log(result);
    readline.close();
  })
});