// #expect  for expecation
// toBe is  a function available in assertion library.
import {test, expect} from 'vitest';
import { add } from './math';


//test(name, fn, timeout)
test('should summarize all number values in an aaray',()=>{
const result= add([1,2,3]);
expect(result).toBe(6);
})