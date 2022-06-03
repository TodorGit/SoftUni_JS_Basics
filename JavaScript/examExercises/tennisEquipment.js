function tennsiEquipment(input){

    const tennisRacketCost = Number(input[0]);
    const racketsBaught = Number(input[1]);
    const SneakerPairsBaught = Number(input[2]);
    const pairOfSneakersPrice = tennisRacketCost / 6;
    const totalForRackets = racketsBaught * tennisRacketCost;
    const totalForSneakers = SneakerPairsBaught * pairOfSneakersPrice;
    const totalSpentDjock = (totalForRackets + totalForSneakers) * 0.2;
    const totaSpent = totalForRackets + totalForSneakers + totalSpentDjock;
    const DjockSpent = Math.floor(totaSpent / 8);
    const sponsorsSpent = Math.ceil(totaSpent * 7 / 8);

    console.log(`Price to be paid by Djokovic ${DjockSpent}`);
    console.log(`Price to be paid by sponsors ${sponsorsSpent}`);


}

tennsiEquipment([850,
    4,
    2]
    )