function operationsBetweenNumbers(input){

    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const operator = input[2];

    let result = 0;
    let oddOrEven ;


    if(num1 > 0 && num2 > 0){
    switch(operator){

        

        case "+" : 
            result += num1 + num2;
            oddOrEven = result % 2;
            if(oddOrEven != 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            break;

        case "-" :
            result += num1 - num2;
            oddOrEven = result % 2;
            if(oddOrEven != 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            break;

        case "*" : 
            result += num1 * num2;
            oddOrEven = result % 2;
            if(oddOrEven != 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            }
            break;

        case "/" :
            result += num1 / num2;
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
            break;
            
        case "%" :
            result += num1 % num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            break;
        
     }
    }else {
        console.log(`Cannot divide ${num1} by zero`);
    }



}

operationsBetweenNumbers(["112",
"0",
"/"]);