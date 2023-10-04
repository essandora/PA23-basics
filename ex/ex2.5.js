const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus(MB): ', mailSize => {
  readline.question('Sisestage kirja teema pealkiri (kui pealkiri puudub, vajutage "Enter"): ', mailSubject => {
  readline.question('Kas kirjaga on kaasas fail?(jah/ei): ', file => {
  
  if(mailSubject == "" || (file == "jah" && mailSize > 1)) {
  	console.log("Kiri on sp2mm.")
  }
  else {
  	console.log("Kiri ei ole sp2mm.")
  }
    readline.close();
  })
  })
});
