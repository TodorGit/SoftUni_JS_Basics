function hospital(input){

    let index = 0; 
    let doctors = 7;
    const days = Number(input[index]);
    index++;
    let treatedPatients =0;
    let untreatedPatients = 0;
    let diff = 0;



    for( let i = 1; i <= days; i++){
        let patients = Number(input[i]);

        
        if(i % 3 === 0){
            if(treatedPatients<untreatedPatients){
                doctors += 1;
            }
        }

        if(patients <= doctors){
            treatedPatients += patients;

        }else{
            treatedPatients += doctors;
            untreatedPatients += patients - doctors;
        }


    }

console.log(`Treated patients: ${treatedPatients}.`)

console.log(`Untreated patients: ${untreatedPatients}.`)
} 

hospital([4,
    7,
    27,
    9,
    1
    ])