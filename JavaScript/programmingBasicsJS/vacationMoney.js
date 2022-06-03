function vacationMoney(input){

    const puzzlePrice = 2.6;
    const dollPrice = 3;
    const teddyBearPrice = 4.1;
    const minionPrice = 8.2;
    const truckPrice = 2;

    const vacationPrice = Number(input[0]);
    const puzzleCount = Number(input[1]);
    const dollCount = Number(input[2]);
    const teddyBearCount = Number(input[3]);
    const minionCount = Number(input[4]);
    const truckCount = Number(input[5]);

    totalProfit = puzzleCount*puzzlePrice + dollCount*dollPrice + 
    teddyBearCount*teddyBearPrice + minionCount*minionPrice + truckCount*truckPrice ; 

    totalToySales = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount; 

    
    if(totalToySales >= 50){
        totalProfit *= 0.75;
        
    }
    

    totalProfit *= 0.9;

    const difference = Math.abs(totalProfit - vacationPrice);

    if(totalProfit >= vacationPrice){
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }

}



vacationMoney(["40.8",
"20",
"25",
"30",
"50",
"10"]);