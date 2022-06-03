function oscarsWeek(input){

    const moveiName = input[0];
    const hallType = input[1];
    const ticketsBought = Number(input[2]);
    let totalSales = 0 ;

    switch(moveiName){
        case "A Star Is Born":
            if(hallType === "normal"){
                totalSales = ticketsBought * 7.50;
            } else if (hallType === "luxury"){
                totalSales = ticketsBought * 10.50;
            } else {
                totalSales = ticketsBought * 13.50;
            } break;
        case "Bohemian Rhapsody":
            if(hallType === "normal"){
                totalSales = ticketsBought * 7.35;
            } else if (hallType === "luxury"){
                totalSales = ticketsBought * 9.45;
            } else {
                totalSales = ticketsBought * 12.75;
            } break;
        case "Green Book":
            if(hallType === "normal"){
                totalSales = ticketsBought * 8.15;
            } else if (hallType === "luxury"){
                totalSales = ticketsBought * 10.25;
            } else {
                totalSales = ticketsBought * 13.25;
            } break;
        case "The Favourite":
            if(hallType === "normal"){
                totalSales = ticketsBought * 8.75;
            } else if (hallType === "luxury"){
                totalSales = ticketsBought * 11.55;
            } else {
                totalSales = ticketsBought * 13.95;
            } break;
    }

    console.log(`${moveiName} -> ${totalSales.toFixed(2)} lv.`);


}

oscarsWeek(["A Star Is Born",
    "luxury",
    42
    ])