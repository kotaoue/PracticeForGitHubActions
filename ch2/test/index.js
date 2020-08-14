const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
    if ("returns FizzBuzz when value is divisible by 15.", () => {
        assert(fizzbuzz(30) === "FizzBuzz")
    });

    if ("returns Fizz when value is divisible by 3.", () => {
        assert(fizzbuzz(9) === "Fizz")
    });

    if ("returns Buzz when value is divisible by 5.", () => {
        assert(fizzbuzz(10) === "Buzz")
    });

    if ("returns the values when value is not divisible by 3 or 5.", () => {
        assert(fizzbuzz(7) === "7")
    });
});