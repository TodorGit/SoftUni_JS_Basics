function balls(input){
    
    
    const ballCount = Number(input[0]);
    

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColors = 0;
    let blackBalls = 0;
    let totalPoints = 0;


    for (let i = 1; i <= ballCount; i++){

        let counter = input[i];

        if(counter === "red"){
            redBalls++;
            totalPoints += 5;
        } else if (counter === "orange"){
            orangeBalls ++;
            totalPoints += 10;
        } else if (counter ==="yellow"){
            yellowBalls ++;
            totalPoints +=15;
        } else if (counter === "white"){
            whiteBalls ++;
            totalPoints += 20
        } else if (counter === "black"){
            blackBalls ++;
            totalPoints /= 2; 
        } else {
            otherColors ++;
        }
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${blackBalls}`); 


} 