test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("Fifty dollars should be 7,313.08 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromDollarToYen(50);

    // 50 USD should be 50 / 1.07 * 156.5 = apprx 7,313.08 yen
    const expected = (50/1.07)*156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(50)).toBeCloseTo(7313.08); // 1 dollar is 146.26 yen, then 50 dollars should be = (3/1.07)*156.5 7313
})

test("10,000 yen should be  55.59 Pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(10000);

    // If 10,000 yen is 5.56 pounds, then the formula is 10,000 / 156.5 * 0.87
    const expected = (10000/156.5) * 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(10000)).toBeCloseTo(55.59); // 156.5 yen is 1 euro, then 10,000 yen is equal to 10000 / 156.5 * .087
})

/*
Function name	Input	Output
fromDollarToYen	a Dollar amount	equivalent amount in Japan YEN
fromEuroToDollar	a Euro amount	equivalent amount in US Dollar
fromYenToPound	a Yen amount	equivalent amount in British Pound
*/

// One euro is:
/* let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
} */

    //GBP = 10000 / 156.5 * 0.87
    // JPY = 50 / 1.07 * 156.5