function bestPlayer(input){

    let index = 0;
    let command = input[index];
    let bestPlayerName = "";
    let bestPlayerGoals = 0;
    let isTheBest = false;

    while(command!== "END" ){
        let name = input[index];
        index++;
        let goals = input[index];
        index++


        console.log(bestPlayerGoals);
        command = input[index];
               
    }


}

bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])


        
// for(let i = 1; i < 10; i++){
//     console.log(goals);
//     if(goals < bestPlayerGoals){
//     bestPlayerGoals = Number(goals);}
//     else {
//         isTheBest = true;
//         break;
//     }
// }