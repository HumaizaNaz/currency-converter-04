#! /usr/bin/env node
//install inquirer
import inquirer from "inquirer";
//currency conversion object
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
        "EUR": 0.0032,
        "JPY": 0.39,
        "AUD": 0.005,
        "CAD": 0.0045,
        "CHF": 0.0033,
        "CNY": 0.023,
        "INR": 0.27,
        "SAR": 0.013,
    },
    "GBP": {
        "USD": 1.41,
        "EUR": 1.17,
        "JPY": 151.89,
        "AUD": 1.84,
        "CAD": 1.78,
        "CHF": 1.30,
        "CNY": 9.05,
        "INR": 102.32,
        "SAR": 5.29,
        "PKR": 357.14,
    },
    "USD": {
        "EUR": 0.83,
        "JPY": 109.89,
        "GBP": 0.71,
        "AUD": 1.30,
        "CAD": 1.26,
        "CHF": 0.92,
        "CNY": 6.42,
        "INR": 72.71,
        "SAR": 3.75,
        "PKR": 277.77,
    },
    "JPY": {
        "USD": 0.0091,
        "GBP": 0.0066,
        "EUR": 0.0077,
        "AUD": 0.012,
        "CAD": 0.011,
        "CHF": 0.0084,
        "CNY": 0.059,
        "INR": 0.67,
        "SAR": 0.035,
        "PKR": 2.56,
    },
    "EUR": {
        "USD": 1.21,
        "GBP": 0.85,
        "JPY": 130.02,
        "AUD": 1.55,
        "CAD": 1.48,
        "CHF": 1.08,
        "CNY": 7.51,
        "INR": 85.08,
        "SAR": 4.41,
        "PKR": 312.50,
    }, "INR": {
        "USD": 0.014,
        "GBP": 0.011,
        "EUR": 0.012,
        "AUD": 0.019,
        "CAD": 0.018,
        "CHF": 0.013,
        "CNY": 0.091,
        "JPY": 1.49,
        "SAR": 0.052,
        "PKR": 3.70,
    },
    "AUD": {
        "USD": 0.77,
        "GBP": 0.53,
        "EUR": 0.64,
        "JPY": 83.43,
        "CAD": 0.96,
        "CHF": 0.70,
        "CNY": 4.87,
        "INR": 52.63,
        "SAR": 2.72,
        "PKR": 196.36,
    },
    "CAD": {
        "USD": 0.79,
        "GBP": 0.55,
        "EUR": 0.67,
        "JPY": 86.94,
        "AUD": 1.04,
        "CHF": 0.73,
        "CNY": 5.08,
        "INR": 54.67,
        "SAR": 2.82,
        "PKR": 201.23,
    },
    "CHF": {
        "USD": 1.09,
        "GBP": 0.76,
        "EUR": 0.92,
        "JPY": 119.41,
        "AUD": 1.43,
        "CAD": 1.37,
        "CNY": 6.94,
        "INR": 74.81,
        "SAR": 3.87,
        "PKR": 276.19,
    },
    "CNY": {
        "USD": 0.16,
        "GBP": 0.11,
        "EUR": 0.13,
        "JPY": 16.77,
        "AUD": 0.21,
        "CAD": 0.20,
        "CHF": 0.14,
        "INR": 11.05,
        "SAR": 0.51,
        "PKR": 36.62,
    },
    "SAR": {
        "USD": 0.27,
        "GBP": 0.19,
        "EUR": 0.23,
        "JPY": 29.03,
        "AUD": 0.37,
        "CAD": 0.35,
        "CHF": 0.26,
        "CNY": 1.95,
        "INR": 19.21,
        "PKR": 75.61,
    },
};
//Prompt user for input
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Please select your Currency?",
        choices: ["PKR", "GBP", "USD", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "SAR"],
    },
    {
        type: "list",
        name: "to",
        message: "Please select your Conversion rate",
        choices: ["PKR", "GBP", "USD", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "SAR"],
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter the amount you wish to convert",
        choices: ["PKR", "GBP", "USD", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "SAR"],
    },
]);
//Destructuring user input
const { from, to, amount } = answer;
//perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
