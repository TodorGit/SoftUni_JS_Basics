function grades(input){

    let index =0;
    const studentNumber = Number(input[0]);
    let failedSstudents = 0;
    let average = 0;
    let aboveAverage = 0;
    let topStudents = 0;
    let totalStudents = 0;
    let totalGrade = 0;

    for(let i = 1; i <= studentNumber; i++){

        let grade = Number(input[i]);

        if(grade >= 2 && grade <= 2.99){
            failedSstudents += 1;
            totalStudents += 1;
            totalGrade += grade;
        } else if(grade >= 3 && grade <= 3.99){
            average += 1;
            totalStudents += 1;
            totalGrade += grade;
        } else if(grade >= 4 && grade <= 4.99){
            aboveAverage += 1;
            totalStudents += 1;
            totalGrade += grade;
        }else {
            topStudents += 1;
            totalStudents += 1;
            totalGrade += grade;
        }

    }

        const topStudentPercentage = topStudents / totalStudents * 100;
        const aboveAveragePercentage =aboveAverage /totalStudents  *100;
        const averagePercentage = average /totalStudents  *100 ;
        const failedPercentage = failedSstudents / totalStudents *100;
        const averageGrade = totalGrade / totalStudents;
        console.log(`Top students: ${topStudentPercentage.toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${aboveAveragePercentage.toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${averagePercentage.toFixed(2)}%`);
        console.log(`Fail: ${failedPercentage.toFixed(2)}%`);
        console.log(`Average: ${averageGrade.toFixed(2)}`);



}

grades([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
    ])