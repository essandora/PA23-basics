const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Kas soovite istekoha valida (vali "ise") v6i loosida (vali "loos")?: ', valiKoht => {
	if(valiKoht == "ise") {
  readline.question('Kas soovite istuda akna 22res (vali "aken") v6i ei oma asukoht t2psust (vali "muu")?: ', asuKoht => {
  	if(asuKoht == "aken") {
  		console.log("Valisite ise. Aknakoht")
  	} 
  	else {
  		console.log("Valisite ise. Vahek2igukoht.")
  	}
  	readline.close();
  	})
  	}
  	else {
  	let seat = Math.round(Math.random() * 3)
  	if(seat < 2){
  		console.log("Istekoht loositi. Aknakoht.")
  	}
  	else {
  	console.log("Istekoht loositi. Vahek2igukoht.")
  	}
  	readline.close();
  	}
  	 
  })
