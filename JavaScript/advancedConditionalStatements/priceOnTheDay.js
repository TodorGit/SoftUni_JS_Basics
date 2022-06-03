
function pricesOnTheDay(input){

    const type = input[0];
    const day = input[1];
    const amount = Number(input[2]);
    let price = 0;
    
    switch(day){
        case "Monday" :
        case "Tuesday" :
        case "Wednesday" :
        case "Thursday" :
        case "Friday" :
            switch(type){
                case "banana" : price = amount * 2.50; break;
                case "apple" : price = amount * 1.20; break;
                case "orange": price = amount * 0.85; break;
                case "grapefruit" : price = amount * 1.45; break;
                case "kiwi" : price = amount * 2.70; break;
                case "pineapple" : price = amount * 5.50;break;
                case "grapes" : price = amount * 3.85;break;
                default: console.log("error")
            } break ; 
        case "Saturday":
        case "Sunday" :
            switch(type){
                case "banana" : price = amount * 2.70; break;
                case "apple" : price = amount * 1.25; break;
                case "orange": price = amount * 0.90; break;
                case "grapefruit" : price = amount * 1.60; break;
                case "kiwi" : price = amount * 3.00; break;
                case "pineapple" : price = amount * 5.60;break;
                case "grapes" : price = amount * 4.20;break; 
                default:console.log("error");
            } break; 

    }

    console.log(price.toFixed(2));

}

pricesOnTheDay(["apple", "Tuesday", 2]);

// function pricesOnTheDay(input){

//     const type = input[0];
//     const day = input[1];
//     const amount = Number(input[2]);
//     let price = "";
    
//     switch(day){
//         case "Monday" :
//         case "Tuesday" :
//         case "Wednesday" :
//         case "Thursday" :
//         case "Friday" :
//             switch(type){
//                 case "banana" : price = amount * 2.50; break;
//                 case "apple" : price = amount * 1.20; break;
//                 case "orange": price = amount * 0.85; break;
//                 case "grapefruit" : price = amount * 1.45; break;
//                 case "kiwi" : price = amount * 2.70; break;
//                 case "pineapple" : price = amount * 5.50;break;
//                 case "grapes" : price = amount * 3.85;break;
                
//             } break ; 
//         case "Saturday":
//         case "Sunday" :
//         default: console.log("error");
//             switch(type){
//                 case "banana" : price = amount * 2.70; break;
//                 case "apple" : price = amount * 1.25; break;
//                 case "orange": price = amount * 0.90; break;
//                 case "grapefruit" : price = amount * 1.60; break;
//                 case "kiwi" : price = amount * 3.00; break;
//                 case "pineapple" : price = amount * 5.60;break;
//                 case "grapes" : price = amount * 4.20;break; 
//                 default:console.log("error");
//             } break; 

//     }

//     console.log(Number(price.toFixed(2)));

// }

// pricesOnTheDay(["apple", "Workday", 2]);