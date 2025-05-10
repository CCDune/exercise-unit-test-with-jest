// One euro is:
/* let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
} */

/*
Function name	Input	Output
fromDollarToYen	a Dollar amount	equivalent amount in Japan YEN
fromEuroToDollar	a Euro amount	equivalent amount in US Dollar
fromYenToPound	a Yen amount	equivalent amount in British Pound
*/

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = (valueInDollar / 1.07) * 156.5 ;
    // return the Yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = (valueInYen / 156.5) * 0.87;
    // return the dollar value
    return valueInPound;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

 //GBP = 10000 / 156.5 * 0.87
    // JPY = 50 / 1.07 * 156.5