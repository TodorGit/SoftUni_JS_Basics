function birthday(input){

    const rent = Number(input);
    const cake = (20/100)*rent
    const drinks = cake - (45/100)*cake
    const animations = rent / 3; 
    const totalSumNeeded = rent + cake + drinks + animations;
  
    console.log(totalSumNeeded);
  
  }
  
  birthday("2250");