function divisionWithoutRemainder(input){

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let index = 0;
    let numberCount = Number(input[index]);
    index++;


    for(let i = 1; i <= numberCount; i++){
        let currentNum = input[i]

        if(currentNum % 2 ===0){
            p1++;
        } 
        if(currentNum % 3 === 0){
            p2++;
        } 
        if(currentNum % 4 ===0){
            p3++;
        }

        
    }

    const percentP1 = p1 / numberCount * 100;
    const percentP2 = p2 / numberCount * 100;
    const percentP3 = p3 / numberCount * 100;

    console.log(`${percentP1.toFixed(2)}%`);
    console.log(`${percentP2.toFixed(2)}%`);
    console.log(`${percentP3.toFixed(2)}%`);
}

divisionWithoutRemainder([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199,
    46,
    128,
    65])