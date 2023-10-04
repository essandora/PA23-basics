const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage enda vanus: ', age => {
readline.question('Sisestage enda sugu(M/m v6i N/n): ', sex => {
readline.question('Sisestage treeningu tyyp (1, 2 v6i 3): ', trainingType => {
  let maxPulse

  if(sex == 'M' || sex == 'm') {
    maxPulse = 220 - age
  }
  if(sex == 'N' || sex == 'n') {
    maxPulse = 206 - 0.88 * age
  }
  
  let min
  let max
  if(trainingType == '1') {
  	min = 0.5 * maxPulse
  	max = 0.7 * maxPulse
  }
  else if(trainingType == '2') {
  	min = 0.7 * maxPulse
  	max = 0.8 * maxPulse
  }
  else if(trainingType == '3') {
  	min = 0.8 * maxPulse
  	max = 0.87 * maxPulse
  }
  
    console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni ' + Math.round(max) + '.')
    readline.close();
  })
  })
});
