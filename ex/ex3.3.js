const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage t2ringute arv: ', t2ringud => {
  for (let i = 1; i <= t2ringud; i++) {
    console.log(Math.ceil(Math.random() * 6))
  }
    readline.close();

});