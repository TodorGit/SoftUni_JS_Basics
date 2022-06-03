function numberPyrimid(input){


    let targeNum = Number(input[0]);
    let currentNum = 0;
    let isEqual = false; 

    for(let rows = 1; rows <= targeNum; rows++){
        let printLine = "";
        for(let cols = 1; cols <= rows; cols++){
            currentNum++;
            printLine += currentNum + " ";
            if(currentNum === targeNum){
                isEqual = true;
                break;
            }
        }
        console.log(printLine);
        if(isEqual){
            break;
        }
    }


}

numberPyrimid(["7"])