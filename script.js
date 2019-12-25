	// Exercise 19:
	// Framed Sentence: The forest is lovely in the the spring
	// ********
	// * the *
	// * forest *
	// * is *
	// ********

	let sentence = "The forest is lovely in the spring";
	let sentenceArray = sentence.split(" ");
	let maxLength = 0;

	// console.log("number of rows = " + (sentenceArray.length + 2)); 9

	for (let i = 0; i < sentenceArray.length; i++) {
		if(maxLength <= sentenceArray[i].length){
			maxLength = sentenceArray[i].length;
		}
	}
	// console.log("maxLength = " + maxLength); 6
	for (var i = 0; i <= (sentenceArray.length); i++) {
		if (i == 0 || i == (sentenceArray.length)) {
			for (var j = 0; j < (maxLength + 2); j++) {
				document.write("*");
			}
			document.write("<br>");
		}  
			else{
				document.write('*');
				document.write(sentenceArray[i]);
		
				for (var k = 0; k < (maxLength - sentenceArray[i].length); k++) {
				document.write('&nbsp;')
		}

		document.write('*')

		document.write("<br>");
	}	
}