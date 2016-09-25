var speeches = [{speeches1}, {speeches2}, {speeches3}];

var x = (1942-1940);

document.body.onload = function() {
	console.log("Ghandi's speech and Churchill's speech are " + [x] +" years apart.");
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by "+ speeches1.authorName +" in "+ speeches1.year +". It is "+ [speeches1.bce===true] +" that this year is B.C.E.");
});

var speeches1={
  	'speech' 		: 'Their Finest Hour',
  	'authorName' 	: 'Winston Churchill',
  	'year'   		: '1940',
  	'bce' 			: false,
  	'ce'   			: true
 };

//THEIR FINEST HOUR Winston Churchill June 18, 1940

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by "+ speeches2.authorName +" in "+ speeches2.year +". It is "+ [speeches2.bce===true] +" that this year is B.C.E.");
});

var speeches2={
  	'speech' 		: 'Quit India',
  	'authorName' 	: 'Mahatma Ghandi',
  	'year'   		: '1942',
  	'bce' 			: false,
  	'ce'   			: true
 };

//QUIT INDIA Ghandi August 8, 1942

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by "+ speeches3.authorName +" in "+ speeches3.year +". It is "+ [speeches3.bce===true] +" that this year is B.C.E.");
});

var speeches3={
  	'speech' 		: 'The Third Philippic',
  	'authorName' 	: 'Demosthenes',
  	'year'   		: '342',
  	'bce' 			: true,
  	'ce'   			: false
};
//THE THIRD PHILIPPIC Demosthenes 342 B.C.E.