function hotelRoom(input){

    const month = input[0];
    const stay = Number(input[1]);

    let totalPriceStudio = 0;
    let totalPriceApartment = 0;

    if(month === "May" || month === "October"){

        if(stay <= 7){
            totalPriceStudio  += 50 * stay ;
            totalPriceApartment += 65 * stay;
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
        }
        else if(stay > 7 && stay <= 14){
            totalPriceStudio += (50 * stay) * 0.95;
            totalPriceApartment += 65 * stay;
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio} lv.`);
        } else {
            totalPriceStudio  += (50 * stay) * 0.70 ;
            totalPriceApartment += (65 * stay) * 0.90;   
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
        }

    }else if(month == "June" || month == "September"){

        if(stay <= 14){
            totalPriceStudio  += 75.20 * stay ;
            totalPriceApartment += 68.70 * stay;
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`) ;
        }else {
            totalPriceStudio  += (75.20 * stay) * 0.80 ;
            totalPriceApartment += (68.70 * stay) * 0.90;   
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
        }

    }else {
        if(stay <= 14){
        totalPriceStudio  += 76 * stay ;
        totalPriceApartment += 77 * stay;
        console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
        console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
        } else {
            totalPriceStudio  += 76 * stay;
            totalPriceApartment += (77 * stay) * 0.90;
            console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
        }

    }
}



hotelRoom(["June",
"14"]);

