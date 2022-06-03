function neighborhoodShop(input){

    const type = input[0];
    const town = input[1];
    const amount = Number(input[2]);
    let price = 0 ;
    switch(town){
        case "Sofia" :
            switch(type){
                case "coffee" :price = 0.50 * amount;break;
                case "water" :price =  0.80 * amount;break;
                case "beer" : price = 1.20 * amount;break;
                case "sweets" :price = 1.45 * amount;break;
                case "peanuts" : price = 1.60 * amount;break;
            } 
            break;
        case "Plovdiv" : 
            switch(type){
                case "coffee" :price = 0.40 * amount;break;
                case "water" :price =  0.70 * amount;break;
                case "beer" : price = 1.15 * amount;break;
                case "sweets" :price = 1.30 * amount;break;
                case "peanuts" : price = 1.50 * amount;break;
            }
            break; 
        case "Varna" :
            switch(type){
                case "coffee" :price = 0.45 * amount;break;
                case "water" :price =  0.70 * amount;break;
                case "beer" : price = 1.10 * amount;break;
                case "sweets" :price = 1.35 * amount;break;
                case "peanuts" : price = 1.55 * amount;break;
            }
            break;
    }
        
        console.log(price);
    

}

neighborhoodShop(["coffee", "Varna", "2"])