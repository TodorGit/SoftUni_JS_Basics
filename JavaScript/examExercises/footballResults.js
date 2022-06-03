function footballResults(input){

    const resultOne = input[0];
    const resultTwo = input[1];
    const resultThree = input[2];
    let win =0;
    let lose = 0;
    let draw = 0;

    if(resultOne[0]>resultOne[2]){
        win++
    } else if(resultOne[0]<resultOne[2]) {
        lose++
    } else {
        draw++;
    }

    if(resultTwo[0]>resultTwo[2]){
        win++;
    } else if(resultTwo[0]<resultTwo[2]) {
        lose++;
    } else {
        draw++;
    }

    if(resultThree[0]>resultThree[2]){
        win++;
    } else if(resultThree[0]<resultThree[2]) {
        lose++;
    } else {
        draw++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw}`);
}




footballResults(["3:1",
"0:2",
"0:0"])
