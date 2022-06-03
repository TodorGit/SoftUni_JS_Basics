function logistics(input){
    let index = 0;
    const numberOfLoads = Number(input[index]);
    index++;

    const pricePerToneVan = 200;
    const PricePerToneTruck = 175;
    const PricePerToneTrain = 120;
    let totalTonsVan = 0;
    let totalTonsTruck = 0;
    let totalTonsTrain = 0;
    let totalTonPrice = 0;
    let tons = 0;
    let tonsVan =0 ;
    let tonsTruck = 0;
    let tonsTrain =0;

    for(let i = 1; i <= numberOfLoads; i++){
        let num =  Number(input[i]);

        if(num <= 3){
            totalTonsVan += pricePerToneVan * num;
            tons += num;
            tonsVan += num;
        }else if(num >=4 && num <=11){
            totalTonsTruck += PricePerToneTruck * num;
            tons += num;
            tonsTruck += num;
        } else{
            totalTonsTrain += PricePerToneTrain * num;
            tons += num;
            tonsTrain += num;
        }

    }

    totalTonPrice =(totalTonsVan + totalTonsTruck + totalTonsTrain) / tons; 
    const vanPercentage = tonsVan  / tons * 100;
    const truckPercentage = tonsTruck / tons * 100;
    const trainPercentage = tonsTrain / tons * 100;
    console.log(totalTonPrice.toFixed(2));
    console.log(`${vanPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);

   
} 

logistics([4,
    1,
    5,
    16,
    3
    ])