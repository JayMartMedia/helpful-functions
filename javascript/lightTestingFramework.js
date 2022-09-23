// replace with your function
function sum(num1, num2){
    return num1 + num2;
}

// Update test cases for your need
const testCases = [{
    actual: sum(1,2),
    expected: 3,
    meta: 'the sum of 1 and 2 is 3'
},{
    actual: sum(4,-1),
    expected: 3,
    meta: 'the sum of 4 and -1 is 3'
}];

/* Don't need to modify */
function runTests(testCases){
    for(let i = 0; i < testCases.length; i++){
        const testCase = testCases[i];
        console.assert(testCase.expected === testCase.actual, {expected: testCase.expected, actual: testCase.actual, meta: testCase.meta});
    }
}

runTests(testCases);
/* End don't need to modify */
