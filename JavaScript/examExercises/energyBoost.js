function energyBooster(input){

    const smallPackage = 2;
    const bigPackge = 5; 
  
    const watermelonS = smallPackage * 56;
    const watermelonB = bigPackge * 28.70;
    const mangoS = smallPackage * 36.66;
    const mangoB = bigPackge * 19.60;
    const pineappleS = smallPackage * 42.10;
    const pineappleB = bigPackge * 24.80;
    const malinaS = smallPackage * 20;
    const malinaB = bigPackge * 15.20;
    
  
    const fruit = input[0];
    const packageType = input[1];
    const packagesOrdered =Number(input[2]);
    
    let price = 0;
  
  
    switch(fruit){
      case "Watermelon":
        if(packageType === "small"){
          price = watermelonS * packagesOrdered;
        } else {
          price = watermelonB * packagesOrdered
        }
        break;
      case "Mango":
        if(packageType === "small"){
          price = mangoS * packagesOrdered;
        } else {
          price = mangoB * packagesOrdered
        }
        break;
      case "Pineapple":
        if(packageType === "small"){
          price = pineappleS * packagesOrdered;
        } else {
          price = pineappleB * packagesOrdered
        }
        break;
      case "Raspberry":
        if(packageType === "small"){
          price = malinaS * packagesOrdered;
        } else {
          price = malinaB * packagesOrdered
        }
        break;
    }
  
    if(price >= 400 && price <= 1000 ){
      price = price * 0.85;
    } else if (price > 1000){
      price = price * 0.50;
    }
  
    console.log(`${price.toFixed(2)} lv.`)
  
  }
  
  energyBooster(["Pineapple",
    "small",
    1
    
    ])
  
  