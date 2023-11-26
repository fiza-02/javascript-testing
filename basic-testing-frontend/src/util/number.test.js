import { it, expect } from 'vitest';
import {transformToNumber} from './numbers';

it('should return a numeric value',()=>{
const num1= '2';
const result = transformToNumber(num1);
expect(result).toBeTypeOf('number')
})

it('should thrown an error if it is NaN and invalid',()=>{
    const num1="harry";
    const result=transformToNumber(num1);
    console.log(result)
    expect(result).toBeNaN();
})