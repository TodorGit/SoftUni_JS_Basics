function movingOut(input){

    let index = 0;
    const spaceWidth = Number(input[index]);
    index++;
    const spaceLength = Number(input[index]);
    index++;
    const spcaeHeight = Number(input[index]);
    index++;
    let totalSpace = spaceWidth * spaceLength * spcaeHeight;
    let command = input[index];
    

    while(command != "Done" && totalSpace >= 0 ){
        let num = input[index];

        if(totalSpace > 0){
            totalSpace -= num;

        } else{
            break;
        }

        index++
        command = input[index];

    }

    if(totalSpace > 0){
        console.log(`${totalSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);

    }

}

movingOut([10,
    1,
    2,
    4,
    6,
    "Done"
]);


