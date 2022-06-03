function housePaintJob(input){

	const x = Number(input[0]);
	const y = Number(input[1]);
	const h = Number(input[2]);


	let side = x * y; 
	let window = 1.5 * 1.5; 
	let totalSides = side * 2 - window * 2;
	let front = x * x;
	let door = 1.2 * 2;
	let totalFronts = front * 2 - 2.4;
	let totalWalls = totalFronts + totalSides;
	let greenPaint = totalWalls / 3.4;
	

	let roofSides = 2* (x * y);
	let roofFronts = 2 * (x * h / 2);
	let totalRoof = roofSides + roofFronts;
	let redPaint = totalRoof / 4.3; 
	

	console.log(greenPaint.toFixed(2));
	console.log(redPaint.toFixed(2));

}



housePaintJob([6,10,5.2]);