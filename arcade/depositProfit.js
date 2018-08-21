function depositProfit(deposit, rate, threshold) {
    let result = 0, depositSum = 0;

    depositSum = deposit;

    for (let year = 1; year<=600; year++) {
        let addMoney = 0;
        addMoney = depositSum * rate/100;

        depositSum = depositSum + addMoney;

        if (depositSum >= threshold) {
            result = year;
            break;
        }
    }

    return result;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
let d = 0, r = 0, t = 170;

//d = 100;
//r = 20;
//t = 170;

d = 1;
r = 1;
t = 200;

console.log(depositProfit(d,r,t));