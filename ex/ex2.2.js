const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage Leedu perekonnanimi: ', leeduPerenimi => {
  let result
  if(leeduPerenimi.slice(-2) == "ne") {
    result=('Perekonnaseis: abielus')
  }
  else if(leeduPerenimi.slice(-2) == "te") {
    result=('Perekonnaseis: vallaline')
  }
  else if(leeduPerenimi.slice(-1) == "e") {
    result=('Perekonnaseis: m22ramata')
  }
  else {
    result=('Pole Leedu perekonnanimi')
  };
  console.log(result);
    readline.close();
  });