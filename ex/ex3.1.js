const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Mitu korda kukk kireb?: ', alarm => {
	for (let kord = 0; kord < alarm; kord++) {
    console.log("T6use ja s2ra!")
  }
    
    readline.close();
});
