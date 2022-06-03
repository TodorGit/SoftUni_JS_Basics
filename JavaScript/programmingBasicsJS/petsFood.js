function pets(input){

    const holidayDays = Number(input[0]);
    const totalFoodLeft = Number(input[1]);
    const dogFoodPerDay = Number(input[2]);
    const catFoodPerDay = Number(input[3]);
    const turtleFoodPerDay = Number(input[4]);


    const totalDogFood = holidayDays * dogFoodPerDay;
    const totalCatFood = holidayDays * catFoodPerDay;
    const totalTurtleFood = (holidayDays * turtleFoodPerDay) / 1000;

    const totalFoodNeeded = totalCatFood + totalDogFood + totalTurtleFood;

    const difference = Math.abs(totalFoodLeft - totalFoodNeeded);

    if( totalFoodNeeded <= totalFoodLeft){

        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`)
    }

}

pets([5,
    10,
    2.1,
    0.8,
    321
    
    ])