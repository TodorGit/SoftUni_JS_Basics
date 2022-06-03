function oscars(input){

    const rent = Number(input[0]);
    const awards = rent * 0.70;
    const catering = awards * 0.85;
    const music = catering / 2 ;
    const totalCost = rent + awards + catering + music ; 

    console.log(`${totalCost.toFixed(2)}`);



  }

  oscars([3500])