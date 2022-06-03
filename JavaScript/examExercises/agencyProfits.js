function agencyProfit(input){

    index = 0;
    const companyName = input[index];
    index++;
    const adultTickets = Number(input[index]);
    index++;
    const childTickets = Number(input[index]);
    index++;
    const adultTicketPrice = Number(input[index]);
    index++;
    const serviceTax = Number(input[index]);
    index++;


    const childTicketPrice = adultTicketPrice * 0.3;
    const adultTicketWithServiceTax = adultTicketPrice + serviceTax;
    const childTicketPriceWithServicetax = childTicketPrice + serviceTax;

    const totalTicketPrice = (childTicketPriceWithServicetax * childTickets) + (adultTicketWithServiceTax * adultTickets);
    const agencyProfits = totalTicketPrice * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${agencyProfits.toFixed(2)} lv.`);

} 

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40",
    ])