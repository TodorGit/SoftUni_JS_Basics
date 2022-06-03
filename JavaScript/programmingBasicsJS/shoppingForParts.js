function partsShopping(input){

    const singleVideoCardPrice = 250;

    const budget = Number(input[0]);
    const videoCardsCount = Number(input[1]);
    const processorCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const videocardsPrice = videoCardsCount * singleVideoCardPrice;
    const processorsPrice = videocardsPrice * 0.35;
    const ramPrice = videocardsPrice * 0.1;


    let totalSum = videocardsPrice + processorCount * processorsPrice + ramPrice * ramCount;


    if(videoCardsCount > processorCount){
        totalSum *= 0.85;
    }

    const difference = Math.abs(totalSum - budget).toFixed(2);

    if(totalSum <= budget ){
        console.log(`You have ${difference} leva left!`);
    } else {
        console.log(`Not enough money! You need ${difference} leva more!`);
    }

}

partsShopping(["900",
"2",
"1",
"3"]);