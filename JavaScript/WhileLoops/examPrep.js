function examPrep(input){

    let countOfBadGrades = input[0];
    let index = 1;
    let command = input[index];
    let numberOfProblems = 0;
    let sumGrades = 0;
    let NumOfBadGrades = 0;

    while (command !== "Enough"){
        numberOfProblems++;
        index++;
        let currentGrade = Number(input[index]);
        sumGrades+= currentGrade
        if(currentGrade <= 4){
            NumOfBadGrades++;
        }
        if(NumOfBadGrades >= countOfBadGrades){
            console.log(`You need a break, ${NumOfBadGrades} poor grades.`);
            break;
        }
        index++;
        command = input[index];
    }

    if(command === "Enough"){
        let avgGrade = (sumGrades / numberOfProblems).toFixed(2);
        console.log(`Average score: ${avgGrade}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        index -= 2;
        let command = input[index];
        console.log(`Last problem: ${command}`);
    }
}