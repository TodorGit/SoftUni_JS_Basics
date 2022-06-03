function footballLeague(input){

    const stadiumCapacity = Number(input[0]);
    const totalFans = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for( let i = 2; i <= totalFans + 1 ; i++){
        let num = input[i];

        switch(num){
            case "A":
                sectorA++;
                break;
            case "B":
                sectorB++;
                break;
            case "V":
                sectorV++;
                break;
            case "G":
                sectorG++;
                break;
        }
    }

    const sectorAPercentage = sectorA / totalFans * 100;
    const sectorBPercentage = sectorB / totalFans * 100;
    const sectorVPercentage = sectorV / totalFans * 100;
    const sectorGPercentage = sectorG / totalFans * 100;
    const averageCapacity = (sectorA + sectorB + sectorV + sectorG) / stadiumCapacity * 100;

    console.log(`${sectorAPercentage.toFixed(2)}%`);
    console.log(`${sectorBPercentage.toFixed(2)}%`);
    console.log(`${sectorVPercentage.toFixed(2)}%`);
    console.log(`${sectorGPercentage.toFixed(2)}%`);
    console.log(`${averageCapacity.toFixed(2)}%`);

}

footballLeague([76,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
    ])