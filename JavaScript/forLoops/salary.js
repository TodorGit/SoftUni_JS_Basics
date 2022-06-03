function salary(input){

    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++
      
      let isHaveSalary = true; 
    
    for(let i = 0; i < openTabs; i++){
    
      let currentTabs = input[index];
      index++;
    
    if(currentTabs === "Facebook"){
        
      money -= 150;
    } else if(currentTabs === "Instagram"){
    
        money -= 100;
    } else if(currentTabs === "Reddit"){
        money -= 50;
    }
    
    if(money <= 0){
        console.log("You have lost your salary.")
      isHaveSalary = false;
         break
    }
  
  }
    if(isHaveSalary){
        console.log(money);
    }
    
  }