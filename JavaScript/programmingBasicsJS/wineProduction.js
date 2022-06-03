function wineProduction(input){

    const vineyardSize = Number(input[0]);
    const grapesPerSquare = Number(input[1]);
    const wineNeeded = Number(input[2]);
    const workers = Number(input[3]);
    const grapesPerLiterWine = 2.5;

    const totalGrapes = vineyardSize * grapesPerSquare;
    const wine = Math.floor(0.40 * totalGrapes / grapesPerLiterWine); 
    const wine2 = 0.40 * totalGrapes / grapesPerLiterWine; 

    const difference =Math.floor(wineNeeded - wine2);
    const difference2 = Math.ceil(wine - wineNeeded);
    const winePerPerson = Math.abs(Math.ceil(difference / workers));

    if(wineNeeded > wine){

        console.log(`It will be a tough winter! More ${difference} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${wine} liters.`);
        console.log(`${difference2} liters left -> ${winePerPerson} liters per person.`);
    }
}

wineProduction([650,
    2,
    175,
    3
    
    ])