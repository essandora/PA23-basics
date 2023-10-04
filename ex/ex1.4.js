const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage oma nimi: ', name => {
	readline.question('Sisestage lubatud kiirus: ', lubKiirus => {
		readline.question('Sisestage tegelik kiirus: ', tegKiirus => {
			// let parseInt v6ib ka kasutada //
		let trahv = Math.abs (tegKiirus - lubKiirus) * 3.0
		let l6ppTrahv = Math.min (190, trahv) // min leiab v2iksema v22rtuse
    console.log(name + ', kiiruse yletamise eest on teie trahv ' + l6ppTrahv + ' eurot');
    readline.close();
  })
	})
	});
