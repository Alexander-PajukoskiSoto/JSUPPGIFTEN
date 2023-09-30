console.log("********FREELANCE START********")

// Define daily rate
const dRate = hPay => 8*hPay;

// print daily rate
console.log(dRate(89));

// define days for budget
const daysInBudet = (budget,hPay) => Math.floor(budget/(hPay*8));

// print days for budget
console.log(daysInBudet(20000,89));

// define price with monthly discount
const priceWithMonthlyDiscount = (hPay,day,discount) => Math.ceil((hPay*8)*(day%22)+((day - day%22)*(1-discount)*(hPay*8)))

// print price with monthly discount
console.log(priceWithMonthlyDiscount(89,230,.42))
// OBS! Det går att lägga console.log i funktionen, men det kan vara enklare att använda till en hemsida eller något ifall det inte är det.
console.log("********FREELANCE END********")

