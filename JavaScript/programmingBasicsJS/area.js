function  area(input){

	topSide = Number(input[0]);
	bottomSide = Number(input[1]);
	height = Number(input[2]);

	area = (topSide + bottomSide) * height / 2;
	console.log(area);
}

area([8,13,7]);





// task 
function areaOfFigures(input){

	const type = (input[0]);

	if (type === "square"){
	const a = Number(input[1]);
	const areaOfaSquare = a * a;

	console.log(areaOfaSquare.toFixed(3));
	} else if (type === "rectangle"){
		const a = Number(input[1]);
		const b = Number(input[2]);
		const result = a * b; 
		console.log(result.toFixed(3));
	} else if (type === "circle") {
		const r = Number(input[1]);
		const result = Math.PI * Math.pow(r, 2);
		console.log(result.toFixed(3));  
	} else {
		const a = Number(input[1]);
		const b = Number(input[2]);
		const result = a * b / 2; 
		console.log(result.toFixed(3));
	}

}



areaOfFigures(["square",5]);