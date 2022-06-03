function gymnastics(input){

    const country = input[0];
    const type = input[1];
    const max = 20; 
    score = 0;

    switch(country){
        case "Bulgaria": if(type === "ribbon"){
            score = 9.600 + 9.400;
        } else if (type === "hoop"){
            score = 9.550 + 9.750;
        } else {
            score = 9.500 + 9.400;
        } break;
        case "Russia": if(type === "ribbon"){
            score = 9.100 + 9.400;
        } else if (type === "hoop"){
            score = 9.300 + 9.800;
        } else {
            score = 9.600 + 9.000;
        } break;
        case "Italy": if(type === "ribbon"){
            score = 9.200 + 9.500;
        } else if (type === "hoop"){
            score = 9.450 + 9.350;
        } else {
            score = 9.700 + 9.150;
        } break;
    }

    let pointsToReachMax = max - score; 
    let percentage = (pointsToReachMax / max) * 100;

    console.log(`The team of ${country} get ${score.toFixed(3)} on ${type}.`);
    console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Russia",
"rope"])

