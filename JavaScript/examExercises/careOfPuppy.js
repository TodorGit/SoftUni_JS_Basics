function careOfPuppy(input){

    let  index = 0;
    const dogFoodInKG = Number(input[index]);
    index++;
    const dogFoodInGrams = dogFoodInKG * 1000;
    let totalFoodEated = 0;
    let command = input[index];
  
    while(command !== "Adopted"){
      let itr = Number(input[index]);
  
      totalFoodEated += itr;
      index++
      command = input[index]
    }
  
    const diff = Math.abs(dogFoodInGrams - totalFoodEated);
  
    if(totalFoodEated <= dogFoodInGrams){
      console.log(`Food is enough! Leftovers: ${diff} grams.`)
    } else {
      console.log(`Food is not enough. You need ${diff} grams more.`)
    }
  
  
  } 
  
  careOfPuppy(["2",
  "999",
  "456",
  "999",
  "999",
  "123",
  "456",
  "Adopted"])
  