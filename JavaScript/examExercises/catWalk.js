function catWalking(input){

    const calPerMin = 5;
    const walkMinutes = Number(input[0]);
    const walkCount = Number(input[1]);
    const catCal = Number(input[2]);

    const totalMinWalked = walkMinutes * walkCount;
    const totalCalBurned = totalMinWalked * calPerMin;
    const calToBeBurned = catCal / 2;

    if(totalCalBurned >= calToBeBurned){
      console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalBurned}. `)
    }else {
      console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalBurned}.`)
    }
  }

catWalking([15,
  2,
  500,
  ] 
  )