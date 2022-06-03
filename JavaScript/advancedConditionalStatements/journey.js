function journey(input){

    const budget = Number(input[0]);
    const season = input[1];

    let moneySpent = 0;
    switch(season){
        case "summer":
            if(budget<= 100){
                moneySpent += budget * 0.30;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${moneySpent.toFixed(2)}`);
            } else if (budget > 100 &&  budget <= 1000){
                moneySpent += budget * 0.40;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${moneySpent.toFixed(2)}`); 
            } else {
                moneySpent += budget * 0.90;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${moneySpent.toFixed(2)}`); 
            }break;
        case "winter":
            if(budget <= 100){
                moneySpent += budget * 0.70;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${moneySpent.toFixed(2)}`)
            } else if(budget > 100 && budget <= 1000){
                moneySpent += budget * 0.80;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${moneySpent.toFixed(2)}`)  
            } else{
                moneySpent += budget * 0.90;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${moneySpent.toFixed(2)}`)
            } break;


    }
}

journey(["1500", "summer"])