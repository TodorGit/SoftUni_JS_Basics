function swimmingRecord(input){
    const secondsWR = Number(input[0]);
    const meters = Number(input[1]);
    const secondsForOneMeter = Number(input[2]);

    const totalSecunds = meters * secondsForOneMeter;

    const addedTime =Math.floor( meters / 15 ) * 12.5;
    const swimingTime = meters * secondsForOneMeter + addedTime;



    if(swimingTime >= secondsWR){
        const secondsSlower = swimingTime - secondsWR;
        console.log(`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
    } else { 
        console.log(`Yes, he succeeded! The new world record is ${swimingTime.toFixed(2)} seconds.`);
    }
    
    

}


swimmingRecord(["10464",
"1500",
"20"])


