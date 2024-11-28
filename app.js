const sum = (a,b) => {
    return a + b;
}

const fromEuroToDollar = (euro) => {
    // 1 euro = 1.07 dollars
    return euro * 1.07;
}

const fromDollarToYen = (dollar) => {
    // 1 dollar = (1 / 1.07) euro
    let dollarInEuro = dollar / 1.07;

    // 1 euro = 156.5 yen
    return dollarInEuro  * 156.5;
}

const fromYenToPound = (yen) => {
    // 1 yen = (1 / 156.5) euro
    let yenInEuro = yen / 156.5;

    // 1 euro = 0.87 pounds
    return yenInEuro * 0.87
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };