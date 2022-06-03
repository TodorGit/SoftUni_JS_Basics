function poolCapacity(input){

    const areaOfPool = Number(input[0]);
    const firstPipeDebit = Number(input[1]);
    const secondPipeDebit = Number(input[2]);
    const hoursTheWorkerIsGone = Number(input[3]);

    const firstPipeDebitTotal = firstPipeDebit * hoursTheWorkerIsGone;
    const secondPipeDebitTotal = secondPipeDebit * hoursTheWorkerIsGone;
    const totalForBothPipes = firstPipeDebitTotal + secondPipeDebitTotal;
    const totalForBothPipesPercent = (totalForBothPipes * 100) / 1000;

    const firstPipeContribution = (firstPipeDebitTotal * 100) / totalForBothPipes;
    const secondPipeContribution = (secondPipeDebitTotal * 100) / totalForBothPipes;
    const difference = Math.abs(areaOfPool - totalForBothPipes);

    if(totalForBothPipes <= areaOfPool){

        console.log(`The pool is ${totalForBothPipesPercent}% full. Pipe 1: ${firstPipeContribution.toFixed(2)}%. Pipe 2: ${secondPipeContribution.toFixed(2)}%.`);
    } else {
        console.log(`"For ${hoursTheWorkerIsGone} hours the pool overflows with ${difference.toFixed(2)} liters.`);
    }
}

poolCapacity([100,
    100,
    100,
    2.5
    ])