function sleepyCatTom(input){

    const playTime = 30000;
    const daysOff = Number(input[0]);
    const workingDays = 365 - daysOff;
    const totalPlayingMinutes = workingDays * 63 + daysOff * 127;

    const difference = playTime - totalPlayingMinutes;

    const hours = Math.abs(Math.floor(difference / 60));
    const hours1 = Math.abs(Math.ceil(difference / 60));
    const minutes = Math.abs(difference % 60);

    if(totalPlayingMinutes >= playTime){
        console.log('Tom will run away');
        console.log(`${hours1} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }


}

sleepyCatTom([20]);