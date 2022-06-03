function bills(input){
    let index = 0;
    const months = Number(input[index]);
    index++;
    const waterPricePerMonth = 20;
    const internetPricePerMonth = 15;
    let totalElectricity = 0;
    let totalOtherBills = 0;

    for(let i = 1; i <= months; i++){
        let electricityPerMonth = Number(input[i])
        totalElectricity += electricityPerMonth;
        totalOtherBills += (electricityPerMonth + waterPricePerMonth + internetPricePerMonth) * 1.2    
    }

    const totalWaterPrice = waterPricePerMonth * months;
    const totalInternetPrice = internetPricePerMonth * months;
    const averageBillsPerMonth = (totalElectricity + totalOtherBills + totalWaterPrice + totalInternetPrice) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWaterPrice.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternetPrice.toFixed(2)} lv`);
    console.log(`Other: ${totalOtherBills.toFixed(2)} lv`);
    console.log(`Average: ${averageBillsPerMonth.toFixed(2)} lv`);
    
}

bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ])