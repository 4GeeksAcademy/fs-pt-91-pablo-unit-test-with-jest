// importamos las funciones necesarias
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comenzamos con la primera prueba
test('mensaje: sumamos 14 + 9 que es igual a 23', () => {
    // Comentario: llamamos a la funcion sum()
    let total = sum(14, 9);

    // Esperamos que sum() nos devuelva 23
    expect(total).toBe(23);
});

test('segundo test ***************', () => {
    let total = sum(-4, 4);
    expect(total).toBe(0)
});

test("1 euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, 3.5 euros son (3.5 * 1.07) dolares
    const expectedValue = 3.5 * 1.07;

    expect(dollars).toBe(expectedValue); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    // Prueba de control (1 euro = 1.07 dolares)
    expect(fromEuroToDollar(1)).toBe(1.07)
})

test("1.07 dollars should be 156.5 yen", () => {
    const yens = fromDollarToYen(3.5);

    // Si 1.07 dólares = 1 euro y 1 euro = 156.5 yen, 3.5 dolares = (3.5 / 1.07 * 156.5)
    const expectedValue = 3.5 / 1.07 * 156.5;

    expect(yens).toBe(expectedValue);
    // Prueba de control (1.07 dolares = 1 euro = 156 yen)
    expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("156.5 yen should be 0.87 pounds", () => {
    const pounds = fromYenToPound(3.5);

    // Si 156.5 yen = 1 euro y 1 euro = 0.87 libras, 3.5 yen = (3.5 / 156.5 * 0.87)
    const expectedValue = 3.5 / 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expectedValue);
    // Prueba de control (156.5 yen = 1 euro = 0.87 libras)
    expect(fromYenToPound(156.5)).toBe(0.87);
})