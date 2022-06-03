function vetParking(input){

    const days = Number(input[0]);
    const hours = Number(input[1]);
    let parking = 0;
    let dayOneParking = 0;
    let dayTwoParking = 0;

    for(let i = 1; i <= days; i++){
        for(let j = 1; j <= hours;j++){
            console.log(i,j);
            if(i % 2 === 0 && j % 2 !== 0){
                parking += 2.5;
            } else if(i % 2 !== 0 && j % 2 ===0){
                parking+= 1.25;
            }else{
                parking += 1
            }
           
        }

        if(i == 1){
            dayOneParking += parking;
        } else if(i == 2){
            dayTwoParking += parking;
        }
    }

    console.log(parking,dayOneParking,dayTwoParking);
}

vetParking(["2",
"5"])
