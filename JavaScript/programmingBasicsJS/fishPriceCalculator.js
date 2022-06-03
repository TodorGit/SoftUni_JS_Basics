function fishPriceCalculator(input){

	let priceForSkumria = Number(input[0]);
	let priceForCaca = Number(input[1]);
	let amountPalmud = Number(input[2]);
	let amountSafrid = Number(input[3]);
	let amountMidi = Number(input[4]);

	let pricePalmud = priceForSkumria * 1.6; 
	let palmud = amountPalmud * pricePalmud;
	let priceSafrid = priceForCaca * 1.8;
	let safrid = priceSafrid * amountSafrid;
	let midi = amountMidi * 7.5;

	let total = palmud + safrid + midi;
	let result = total.toFixed(2);

	console.log(result);

}

fishPriceCalculator([5.55,3.57,4.30,3.6,7]);