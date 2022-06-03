function aluminumJoinery(input){

    let index = 0;
    const windowCount = Number(input[index]);
    index++;
    const windowSize = input[index];
    index++;
    const deliveryOption = input[index];
    index++;

    const pricePerTypeOne = 110;
    const pricePerTypeTwo = 140;
    const pricePerTypeThree = 190;
    const pricePerTypeFour = 250;
    let discount = 0 ;
    let orderPrice= 0; 

    switch(windowSize){
        case "90X130":
            if (windowCount <= 10){
                console.log("Invalid order");
            }
            else if(windowCount < 30 && windowCount > 10){
                orderPrice = windowCount * pricePerTypeOne;
            } else if(windowCount >= 30 && windowCount <=60){
                discount = windowCount * pricePerTypeOne * 0.05;
                orderPrice = windowCount * pricePerTypeOne - discount;
            } else {
                discount = windowCount * pricePerTypeOne * 0.08;
                orderPrice = windowCount * pricePerTypeOne - discount;
            }  break;
        case "100X150":
            if(windowCount < 10){
                console.log("Invalid order");
            }
            else if(windowCount< 40 && windowCount > 10){
                orderPrice = windowCount * pricePerTypeTwo;
            } else if(windowCount >= 40 && windowCount <=80){
                discount = windowCount * pricePerTypeTwo * 0.06;
                orderPrice =  windowCount * pricePerTypeTwo - discount;
            } else {
                discount = windowCount * pricePerTypeTwo * 0.1;
                orderPrice =  windowCount * pricePerTypeTwo - discount;
            }  break;
        case "130X180":
            if( windowCount <= 10){
                console.log("Invalid order");
            }
            else if(windowCount < 20  && windowCount > 10){
                orderPrice = windowCount * pricePerTypeThree;
            } else if(windowCount >= 20 && windowCount <= 50){
                discount = windowCount * pricePerTypeThree * 0.07;
                orderPrice = windowCount * pricePerTypeThree - discount;
            } else {
                discount = windowCount * pricePerTypeThree * 0.12;
                orderPrice =windowCount * pricePerTypeThree - discount;
            } break;
        case "200X300":
            if(windowCount <= 10){
                console.log("Invalid order");
            }
            else if(windowCount < 25 && windowCount > 10){
                orderPrice = windowCount * pricePerTypeFour;
            } else if(windowCount >= 25 && windowCount <= 50){
                discount = windowCount * pricePerTypeFour * 0.09;
                orderPrice = windowCount * pricePerTypeFour - discount
            } else {
                discount = windowCount * pricePerTypeFour * 0.14;
                orderPrice= windowCount * pricePerTypeFour -discount
            } break;
        


    }

 

    if(deliveryOption === "With delivery" && windowCount > 10){
        orderPrice += 60;
        
    } else {
        orderPrice ; 
        
    }

    if(windowCount > 99){
        discount = orderPrice * 0.04;
        orderPrice = orderPrice - discount;
        
    }

    if(windowCount > 10){
        console.log(`${orderPrice.toFixed(2)} BGN`);
    }

}

aluminumJoinery(["2",
    "130X180",
    "With delivery"
    
    
    ])