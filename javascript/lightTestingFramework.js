function sumArray(arr){
    let sum = 1;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

// let expected0 = 6;
// let actual0 = sumArray([1,2,3]);
// console.assert(expected0 === actual0, {name: 'positive numbers return expected result', expected: expected0, actual: actual0});

// let expected1 = 3;
// let actual1 = sumArray([1,2,-3,3]);
// console.assert(expected1 === actual1, {name: 'one negative number return expected result', expected: expected1, actual: actual1});

function runTests(testCases){
    for(let i = 0; i < testCases.length; i++){
        const testCase = testCases[i];
        console.assert(testCase.expected === testCase.actual, {expected: testCase.expected, actual: testCase.actual, meta: testCase.meta});
    }
}

const testCases = [{
    actual: sumArray([1,2]),
    expected: 3,
    meta: '1,2 is 3'
},{
    actual: sumArray([-1,-2]),
    expected: -3,
    meta: '-1,-2 is -3'
}];

runTests(testCases);
