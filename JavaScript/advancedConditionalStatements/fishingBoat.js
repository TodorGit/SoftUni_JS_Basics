function fishingBoat(input){

    const boatPriceInSpring = 3000;
    const boatPriceInAutumnAndSummer = 4200;
    const boatPriceInWinter = 2600;
    const groupdBudget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);

    let totalMoney = 0;

    switch(season){
        case "Winter" : 
        totalMoney = boatPriceInWinter;
        break;
        case "Spring" : 
        totalMoney = boatPriceInSpring;
        break;
        case "Autumn" :
        case "Summer" :
        totalMoney = boatPriceInAutumnAndSummer;
        break;
    }

    if(fishermen <= 6){
        totalMoney -= totalMoney * 0.1;
    } else if (fishermen >= 7 && fishermen<=11){
        totalMoney -= totalMoney * 0.15;
    } else if ( fishermen >= 12){
        totalMoney -= totalMoney *0.25;
    }

    if(fishermen % 2 === 0 && season != "Autumn"){
        totalMoney -= totalMoney * 0.05;
    }

    if(groupdBudget >= totalMoney){
        const moneyLeft = groupdBudget - totalMoney;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        const moneyNeeded = totalMoney - groupdBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000",
    "Summer",
    "11"])