function foodforPets(input){

    let index = 0;
    const days = Number(input[index]);
    index++;
    const totalFood = Number(input[index]);
    index++;
    let biscuits = 0;
    let totalFoodEatenByDog = 0;
    let totalFoodEatednByCat = 0;
    let totalFoodEaten = 0;
    let counter = 0;
    let dailyFoodDog = 0;
    let dailyFoodCat = 0;
  
    for( let i = 0; i < days * 2 ; i++){
      let iteration = Number(input[index]);
      index++
      if(i % 2 === 0){
        totalFoodEatenByDog += iteration;
        totalFoodEaten += iteration;
        counter++
        dailyFoodDog = iteration;
        
      } else {
        totalFoodEatednByCat += iteration;
        totalFoodEaten += iteration;
        counter++
        dailyFoodCat = iteration
      }
  
      if((counter/2) % 3 === 0 ){
        biscuits = (dailyFoodCat+dailyFoodDog) * 0.1;
      }
  
  
    }
  
    const eatenFood = (totalFoodEaten / totalFood ) * 100;
    const percentEatenByDog = (totalFoodEatenByDog / totalFoodEaten) * 100;
    const percentEatenByCat = (totalFoodEatednByCat / totalFoodEaten) * 100;
  
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${eatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenByCat.toFixed(2)}% eaten from the cat.`);
  }
  
  foodforPets(["3",
  "500",
  "100",
  "30",
  "110",
  "25",
  "120",
  "35"])
  
    