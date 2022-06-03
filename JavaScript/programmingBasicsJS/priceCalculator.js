function priceCalculator(input){


	vegPrice = Number(input[0]);
	fruitPrice = Number(input[1]);
	kgVeg = Number(input[2]);
	kgFruit = Number(input[3]);

	totalVEg = vegPrice * kgVeg;
	totalFruit = fruitPrice * kgFruit

	total = (totalFruit + totalVEg) / 1.94 
	result = total.toFixed(2);

	console.log(result);
}

priceCalculator([1.5,2.5,10,10])