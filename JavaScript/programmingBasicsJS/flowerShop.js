function flowerShop(input){

    const pricePerMagnolia = 3.25;
    const pricePerZumbil = 4;
    const pricePerRose = 3.5;
    const pricePerCactus = 8;

    const magnoliaOrders = Number(input[0]); //2
    const zumbilOrders = Number(input[1]); // 3
    const RoseOrders = Number(input[2]); // 5
    const cactusOrders = Number(input[3]); //1 
    const priceOfGift = Number(input[4]);


    const totalProfit = pricePerMagnolia * magnoliaOrders + pricePerZumbil * zumbilOrders + pricePerRose * RoseOrders + pricePerCactus * cactusOrders;
    const tax = totalProfit * 0.05;
    const totalWithoutTax = totalProfit - tax;
    
    const difference = Math.abs(totalWithoutTax - priceOfGift);

    if(totalWithoutTax < priceOfGift){
        console.log(`She will have to borrow ${Math.ceil(difference)} leva.`)
    } else {
        console.log(`She is left with ${Math.floor(difference)} leva.`);
    }

}

flowerShop([2,
    3,
    5,
    1,
    50
    ])