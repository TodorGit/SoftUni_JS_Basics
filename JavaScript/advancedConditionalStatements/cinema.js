function cinema(input){

    const premierPrice = 12;
    const normalPrice = 7.5;
    const discountPrice = 5;

    const typeOFProjection = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);

    let finalPrice = 0;

    switch(typeOFProjection){
        case "Premiere":
            finalPrice = premierPrice * rows * cols;
            break;
        case "Normal":
            finalPrice = normalPrice * rows * cols;
            break;
        case "Discount":
            finalPrice = discountPrice * rows *cols; 
        break;
    }

    console.log(`${finalPrice.toFixed(2)}`);
}

cinema(["Premiere", "10", "12"])