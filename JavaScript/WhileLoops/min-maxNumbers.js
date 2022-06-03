function minnNumber(input){

    let index = 0;
    let i = input[index];
    let minNumberr = 0;

    while(i != "Stop"){
        num = Number(input[index]);

        if(num <= Number(i)){
            minNumberr = num;
        }
        i = input[index];
        index++
    }

    console.log(minNumberr);
}

minnNumber([-5000,
    -4000,
    -3000,
    -2000,
    -1000,
    "Stop"])

    


// function maxNumber(input){

//     let index = 0;
//     let command = input[index];
//     index++;
//     let maxNumberr = 0;

//     while(command != "Stop"){
//         let num = Number(command);

//         if(maxNumberr < num){
//             maxNumberr = num;
//         }

//         command = input[index];
//         index++;
//     }
// }
