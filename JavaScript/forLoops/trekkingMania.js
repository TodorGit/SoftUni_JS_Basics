function trekkingMania(input){

    let index = 0;
    const groups = Number(input[index]);
    index++;
    let musalaCounter =0;
    let monblanCounter = 0;
    let kilimandjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter =0;
    let totalpeople= 0;

    for(i = 1; i <= groups;i++){
        
        let num = Number(input[i]);
        totalpeople += num;
        if(num <= 5){
            musalaCounter+= num
        } else if(num >= 6 && num <= 12){
            monblanCounter+= num;
        } else if(num >= 13 && num <= 25 ){
            kilimandjaroCounter+= num;
        } else if (num >= 26 && num <= 40){
            k2Counter+= num
        } else {
            everestCounter+= num
        }
        
    }

    let musalaPercentage = musalaCounter / totalpeople * 100;
    let monblanPercentage = monblanCounter / totalpeople * 100;
    let kilimandjaroPercentage = kilimandjaroCounter / totalpeople * 100;
    let k2Percentage = k2Counter / totalpeople * 100;
    let everestPercentage = everestCounter / totalpeople * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercentage.toFixed(2)}%`);
    console.log(`${kilimandjaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
    
}

trekkingMania(["10", "10","5","1","100","12","26","17","37","40","78"]);