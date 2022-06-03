function solve(input){
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(input[index] !== "stop"){
        let currentNum = Number(input[index]);

        if (currentNum < 0){
            console.log("Number is negative.")
        } else {
            let isPrime = true;
            for(let i = 2; i < currentNum; i++){
                if(currentNum % i == 0){
                    isPrime = false;
                    break;
                }
            }

            if(isPrime){
                primeSum += currentNum;
            } else {
                nonPrimeSum += currentNum
            }
        }
    
        index++;
    }
console.log(`Sum of all prime numbers is: ${primeSum}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);


}
solve(["3", "9", "0", "7", "19","4","stop"])