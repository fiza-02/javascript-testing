// #expect  for expecation
// toBe is  a function available in assertion library.
import { test, expect } from 'vitest';
import { add } from './math';


//test(name, fn, timeout)
test('should summarize all number values in an aaray', () => {
    // Arrange
    const numbers = [1, 2];

    // Add
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue,0);
    expect(result).toBe(expectedResult);
});

//test(name, fn, timeout)
test('should yield NaN if a least one invalid number is provided', () => {
    // Arrange
    const numbers = ['invalid', 2];

    // Add
    const result = add(numbers);

    // Assert
    expect(result).toBeNaN();
})

//test(name, fn, timeout)
test('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2'];

    // Add
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue,0);
    expect(result).toBe(expectedResult);
})

// using not you check for opposite
/*expect(resultFn).not.toThrow(); */
test('should throw an error if no value is passed into the function',()=>{

const resultFn=()=>{
add();
}
    expect(resultFn).toThrow();
})

test('should throw and error if provided with multiple arguments instead of array',()=>{
    const num1=1;
    const num2=2;
    const resultFn=()=>{
    add(num1,num2);}
    expect(resultFn).toThrow();
});