import {describe, it , expect } from 'vitest';
import { generateResult } from './output';

describe('generateResult()',()=>{
it('should return a string, no matter which value is passed in',()=>{
    const val1 = 1;
    const val2 = false;
    const val3 = 'invalid';
    
    const result1=generateResult(val1);
    const result2=generateResult(val2);
    const result3=generateResult(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
})

it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = generateResult(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResult(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResult(result);

    expect(resultText).toContain('Invalid');
  });
});