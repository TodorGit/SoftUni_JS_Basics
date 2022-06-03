function addBags(input){

    let index = 0;
    const priceOver20Kg = Number(input[index]);
    index++;
    const baggadeWeight = Number(input[index]);
    index++;
    const daysToTheFlight = Number(input[index]);
    index++;
    const baggadeNumber = Number(input[index]);
    index++;
    let price = 0;

    if(baggadeWeight < 10){
        price = priceOver20Kg * 0.2;
    } else if(baggadeWeight >= 10 && baggadeWeight <=20){
        price = priceOver20Kg * 0.5;
    } else{
        price = priceOver20Kg;
    }

    if(daysToTheFlight > 30){
        price *= 1.1;
    } else if(daysToTheFlight <= 30 && daysToTheFlight >= 7){
        price *= 1.15;
    }else {
        price *= 1.4;
    }

    let totalPrice = price * baggadeNumber;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `)

}

addBags([
    30,
    18,
    15,
    2
    ])