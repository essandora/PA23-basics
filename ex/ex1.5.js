const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', ainepunktid => {
  readline.question('Sisestage n2dalate arv: ', n2dalad => {
    result = Math.ceil ((ainepunktid * 26) / n2dalad)
    console.log(result);
    readline.close();
  })
});