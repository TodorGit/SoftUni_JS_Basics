function bestPlayer(input){
    let index = 0;
    let bestPlayer = "";
    let bestScore = 0;
    let command = input[index]; 
    
    while (command != "END")
    {   let currentPlayer = input[index];
        index++
        let currentGoals = Number(input[index]);
        index++;
        if (currentGoals > bestScore)
        {
            bestPlayer = currentPlayer;
            bestScore = currentGoals;
        }
    
        if (bestScore >= 10)
        {
            break;
        }
    
        command = input[index]; 
        
    }
    
        console.log(`${bestPlayer} is the best player!`);
    if (bestScore >= 3)
    {
        console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    }
    else
    {
        console.log(`He has scored ${bestScore} goals.`)
    }
    
    }
    
    bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])
    
    
    