function fuelTank(input){

    const typeOfFuel = input[0];
    const litersleft = Number(input[1]);
    

    if(typeOfFuel=== "Diesel" && litersleft >= 25 ){
        console.log(`You have enough ${typeOfFuel.toLowerCase()}.`)
    } else if (typeOfFuel=== "Gasoline" && litersleft >= 25 ){
        console.log(`You have enough ${typeOfFuel.toLowerCase()}.`)
    } else if(typeOfFuel=== "Gas" && litersleft >= 25 ){
        console.log(`You have enough ${typeOfFuel.toLowerCase()}.`)
    } else if (typeOfFuel=== "Diesel" && litersleft < 25 ){
        console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`)
    } else if (typeOfFuel=== "Gasoline" && litersleft < 25 ){
        console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`)
    } else if (typeOfFuel=== "Gas" && litersleft < 25 ){
        console.log(`Fill your tank with ${typeOfFuel.toLowerCase()}!`)
    } else {
        console.log(`Invalid fuel!`)
    }

    }

    fuelTank(["Diesel",
        10
        ])

