// #expect  for expecation
// toBe is  a function available in assertion library.
import { test, expect } from 'vitest';
import { add } from './math';


//test(name, fn, timeout)
test('should summarize all number values in an aaray', () => {
    // Arrange
    const numbers = [1, 2];

    // Add
    const result = add([1, 2, 3]);

    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue,0);
    expect(result).toBe(expectedResult);
})