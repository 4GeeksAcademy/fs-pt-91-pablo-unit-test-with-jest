const sum = (a,b) => {
    return a + b;
}

const fromEuroToDollar = (euro) => {
    // 1 euro = 1.07 dollars
    let dollars = euro * 1.07;
    return dollars;
}

const fromDollarToYen = (dollar) => {
    // 1 dollar = (1 / 1.07) euro
    let dollarInEuro = dollar / 1.07;

    // 1 euro = 156.5 yen
    let yens = dollarInEuro  * 156.5;
    return yens;
}

const fromYenToPound = (yen) => {
    // 1 yen = (1 / 156.5) euro
    let yenInEuro = yen / 156.5;

    // 1 euro = 0.87 pounds
    let pounds = yenInEuro * 0.87;
    return pounds;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };