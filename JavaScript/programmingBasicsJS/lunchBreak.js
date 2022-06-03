function luncBreak(input){

    const seriesName = input[0];
    const durationOfOneEpisode = Number(input[1]);
    const durationOfBreak = Number(input[2]);

    const eatingTime = durationOfBreak / 8 ; 
    const relaxTime = durationOfBreak / 4 ; 

    const timeLeft = durationOfBreak - eatingTime - relaxTime;

    if(timeLeft >= durationOfOneEpisode){
        let difference = durationOfOneEpisode - timeLeft;
        console.log(`You have enough time to watch ${seriesName} and left with ${difference} minutes free time.`);
    } else {
        let difference = durationOfOneEpisode - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.abs(Math.ceil(difference))} more minutes.`);
    }

    
}