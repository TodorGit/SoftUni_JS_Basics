function gameOfIntervals(input){

    let index = 0;
    const turns = Number(input[index]);
    index++;
    let points = 0;
    let points0To9 = 0;
    let points10To19 = 0;
    let points20To29 = 0;
    let points30To39 = 0;
    let points40To50 = 0;
    let invalidNumbers =0;



    for(let i = 1; i <= turns; i++){

        let counter = Number(input[i]);

        if(counter >= 0 && counter <= 9){
            points += counter * 0.2;
            points0To9++;
        } else if(counter >= 10 && counter <= 19){
            points += counter * 0.3;
            points10To19++;
        } else if(counter >=20 && counter <= 29){
            points+= counter * 0.4;
            points20To29++;
        } else if(counter >= 30 && counter <= 39){
            points += 50;
            points30To39++;
        } else if(counter >= 40 && counter <= 50){
            points += 100;
            points40To50++;
        } else{
            points /= 2
            invalidNumbers++;
        }
    }

    const from0To9Percentage = points0To9 / turns * 100;
    const from10To19Percentage = points10To19 / turns  *100;
    const from20To29Percentage = points20To29 / turns  *100 ;
    const from30To39Percentage = points30To39 / turns *100;
    const from40To50Percentage = points40To50 / turns * 100;
    const invalidNumbersPercentage = invalidNumbers / turns * 100;

    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${from0To9Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10To19Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20To29Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30To39Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40To50Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPercentage.toFixed(2)}%`);

}

gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20
    ])