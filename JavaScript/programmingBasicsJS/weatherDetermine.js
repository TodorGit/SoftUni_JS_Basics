function areaOfACircle(input){

	A =  Math.PI * Math.pow(Number(input[0]),2);

	C = 2 * Math.PI * Number(input[0]);

	console.log(A.toFixed(2));
	console.log(C.toFixed(2));

}

areaOfACircle([4.5]);

Task9
function weatherDetermine(input){

	weather = input[0];


	if (weather == "sunny") {
		console.log("It's warm outside!")
	}

	else if ( weather == "cloudy" ){
		console.log("It's cold outside!")

	}

	else if ( weather == "snowy" ){
		console.log("It's cold outside!")

	}
}

weatherDetermine(["cloudy"]);




// Task10


function weatherTwo(input){

	weather = Number(input);


	if (weather > 26.00 && weather < 36.00 ){
		console.log("Hot");
	}
	else if (weather > 20.1 && weather <25.9){
		console.log("Warm");
	}
	else if (weather > 15.0 && weather <20.0){
		console.log("Mild");
	}
	else if (weather > 12.00 && weather <14.9){
		console.log("Cool");
	}
	else if (weather > 5 && weather <11.9){
		console.log("Cold");
	}
	else {
		console.log("Unknown")
	}


}


weatherTwo(40);
