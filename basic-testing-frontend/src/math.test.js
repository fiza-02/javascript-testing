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