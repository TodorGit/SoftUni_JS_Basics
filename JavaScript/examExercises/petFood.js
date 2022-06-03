function petFood(input){

    let index = 0;
    let dayCount = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;

    let eatenDogFood = 0;
    let eatenCatFood = 0;
    let eatenFood = 0;
    let biscuits = 0;


    for(let i = 1; i <= dayCount; i++){
        let tempDogFood = Number(input[index]);
        index++;
        let tempCatFood = Number(input[index]);
        index++;

        eatenFood += tempCatFood + tempDogFood;
        eatenCatFood += tempCatFood;
        eatenDogFood += tempDogFood;

        if(i % 3 === 0){
            biscuits += (tempCatFood + tempDogFood) * 0.10;
        }
    }

    console.log(biscuits);
    console.log(eatenFood);
    console.log(eatenCatFood);
    console.log(eatenDogFood);
}

petFood(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
