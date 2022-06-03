function godzillaVsKong(input){

    const budget = Number(input[0]);
    const extras = Number(input[1]);
    const costumePricePerExtra = Number(input[2]);
    const decorPrice = budget * 0.10;
    let totalPriceForCostumes = 0;

    
    if(extras <= 150){
        totalPriceForCostumes = costumePricePerExtra * extras;
    } else { 
        totalPriceForCostumes = (costumePricePerExtra * extras) * 0.90;
    }

    const finalPrice = decorPrice + totalPriceForCostumes;
    const difference = Math.abs(budget - finalPrice);

    if(budget < finalPrice){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }


}

godzillaVsKong([20000 ,
    120,
    55.5
    ])