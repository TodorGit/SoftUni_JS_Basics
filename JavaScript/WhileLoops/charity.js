function charity(input){
    let index = 0;
    let cashPayment = 0;
    let cardPayment = 0;
    const traget = Number(input[index]);
    index++;
    let command = input[index];
    let moneyCollected = 0;
    let cashTransactions =0;
    let cardTransaction = 0;

    while(command !== "End" && moneyCollected < traget){
        let num = Number(input[index]);

        if(index % 2 !== 0){
            if(num > 100){
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                cashPayment += num
                cashTransactions += 1
                moneyCollected += num;
            }
        } else {
            if(num >= 100){
                console.log("Product sold!");
                cardPayment += num;
                cardTransaction += 1
                moneyCollected += num;
            } else {
                console.log("Error in transaction!");
        }
        

        }
        index++;
        command = input[index];
    }

    const avgCash = cashPayment / cashTransactions;
    const avgCard = cardPayment / cardTransaction;  

    if(moneyCollected > traget){
        console.log(`Average CS: ${avgCash.toFixed(2)}`);
        console.log(`Average CC: ${avgCard.toFixed(2)} `);
    } else {
        console.log("Failed to collect required money for charity.");
    }

}

charity([600,
    86,
    150,
    98,
    227,
    "End"
    
    ])