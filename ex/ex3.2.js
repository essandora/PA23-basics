const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ringide arv:  ', ringid => {
  let sumOfCarrots = 0;
  for (let porgandid = 1; porgandid <= ringid; porgandid++) {
    if (porgandid % 2 == 0) {
      sumOfCarrots = sumOfCarrots + 1
    }
  }
    console.log("Porgandite koguarv on" + ' ' + sumOfCarrots);
    readline.close();
});