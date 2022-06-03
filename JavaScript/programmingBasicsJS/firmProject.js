function companyProject(input){

    const projecHours = Number(input[0]);
    const projectDays = Number(input[1]);
    const overtimeWorkers = Number(input[2]);
    const workingHours = 8;
    const overtime = 2; 

    const trainingTime = projectDays * 0.1;

    const totalWorkHours = (projectDays - trainingTime)  * workingHours ;
    const overtimeWork = overtimeWorkers * (overtime * projectDays);
    const totalHours =  totalWorkHours + overtimeWork;
    const difference = Math.ceil(projecHours - totalHours);

    if(totalHours >= projecHours){
        console.log(`Yes!${Math.abs(difference)} hours left.`)
    } else {
        console.log(`Not enough time!${difference} hours needed.`)
    }


}

companyProject([50,
    5,
    2
    
    
    ])