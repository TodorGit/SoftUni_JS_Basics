function highJump(input){
    let index = 0;
    let target = Number(input[index]);
    index++
    let height = target - 30;
    let counter = 0;

    while(height <= target){
        let isSuccess = false;
        for(let i = 0; i < 3;i++){
            counter++;  
            let tempHeight = Number(input[index]);
            index++;

            if(tempHeight > height){
                isSuccess = true;
                height+= 5;
                break;

            }
        }
        if(!isSuccess){
            console.log(`Tihomir failed at ${height}cm after ${counter} jumps.`);
            break;
        }
    }
    if(height > target){
        console.log(`Tihomir succeeded, and he jumped ${target}cm after ${counter} jumps.`)
    }   
    
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);