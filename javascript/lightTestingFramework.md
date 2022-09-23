Example
```js
// create function to be tested
function sumArray(arr){
    let sum = 1;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// create test cases
const testCases = [{
    actual: sumArray([1,2]),
    expected: 3,
    meta: '1,2 is 3'
},{
    actual: sumArray([-1,-2]),
    expected: -3,
    meta: '-1,-2 is -3'
}];

// copy/paste runTests function and function call
function runTests(testCases){
    for(let i = 0; i < testCases.length; i++){
        const testCase = testCases[i];
        console.assert(testCase.expected === testCase.actual, {expected: testCase.expected, actual: testCase.actual, meta: testCase.meta});
    }
}
runTests(testCases);
```
