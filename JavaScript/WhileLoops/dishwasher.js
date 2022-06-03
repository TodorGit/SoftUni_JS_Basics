function dishwasher(input){

    const bottleOfDetergent = 750;
    let index =0;
    const numberOfBottles = Number(input[index]);
    index++;
    const detPerPlate = 5;
    const detPerPan = 15;
    let command = input[index];
    let totalPlatesCleaned = 0;
    let totalPansCleaned = 0;
    let totalDetergent = numberOfBottles * bottleOfDetergent;

    while(command !== "End" && totalDetergent >= 0){

        let num = Number(input[index]);

        if(index % 3 === 0){
            totalDetergent -= (num * detPerPan);
            totalPansCleaned += num;
        } else {
            totalDetergent -= (num * detPerPlate);
            totalPlatesCleaned += num;
        }
            index++;
            command = input[index];

    }

    if(totalDetergent >= 0){
        console.log("Detergent was enough!");
        console.log(`${totalPlatesCleaned} dishes and ${totalPansCleaned} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`)
    }
}

dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30
    
    ])