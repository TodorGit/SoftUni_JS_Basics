function cake(input){
    index = 0;
    const cakewidth = Number(input[index]);
    index++;
    const cakeheight = Number(input[index]);
    index++;
    let cakeSize = cakewidth * cakeheight;
    let command = input[index];

    while(command != "STOP"){
        let num = input[index];
        if(cakeSize > 0){
            cakeSize -= num;
            
        } else {         
            break;
        }
        
        index++
        command = input[index];
    }

    if(cakeSize > 0){
        console.log(`${cakeSize} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)

    }

}


cake(["10",
"2",
"2",
"4",
"6",
"STOP"
])



