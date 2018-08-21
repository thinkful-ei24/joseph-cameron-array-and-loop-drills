'use stict';

function max(numbers) {
  let maxVal = numbers[0];
  for (let num of numbers){
    if(num > maxVal){
      maxVal = num;
    }
  }
  return maxVal;
}

function min(numbers) {
  let minVal = numbers[0];
  for (let num of numbers){
    if(num < minVal){
      minVal = num;
    }
  }
  return minVal;
}

function average(numbers) {
  if(numbers.length === 0){
    return 0;
  }
  let runningTotal = 0;
  for (let num of numbers){
    runningTotal += num
  }
  return runningTotal/numbers.length;
}

function fizzBuzz(countTo) {
  let fizzArr = [];
  for(let i = 0; i < countTo; i++){
    let curNum = i + 1;
    if(curNum % 15 === 0){
      fizzArr[i] = 'fizzbuzz';
    } else if (curNum % 5 === 0){
      fizzArr[i] = 'buzz';
    } else if (curNum % 3 === 0){
      fizzArr[i] = 'fizz';
    } else {
      fizzArr[i] = curNum;
    }

  }
  return fizzArr;
}



(function testFizzBuzz() {
  // we'll use the variables in our test cases
  const countTo = 16;
  const expected = [1, 2,'fizz', 4,'buzz', 'fizz', 7, 8,'fizz','buzz', 11,'fizz', 13, 14,'fizzbuzz', 16,];

  const actual = fizzBuzz(countTo) || [];

  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;
    })
  ) {
    console.log('SUCCESS: fizzBuzz is working');
  } else {
    console.log('FAILURE: fizzBuzz is not working');
  }
})();

function testFunctionWorks1(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

(function runTests() {
  const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const correctAns1 = 5.5;
  const numList2 = [0, -1, 1];
  const correctAns2 = 0;

  const testResults = [
    testFunctionWorks1(average, numList1, correctAns1),
    testFunctionWorks1(average, numList2, correctAns2),
  ];
  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();

function testFunctionWorks2(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  } else {
    console.log(
      'FAILURE: `' +
        fn.name +
        '([' +
        input +
        '])` should be ' +
        expected +
        ' but was ' +
        fn(input)
    );
    return false;
  }
}

function testEmpty(fn) {
  if (fn([]) === null || fn([]) == undefined) {
    console.log(`SUCCESS: ${fn.name} works on empty arrays`);
    return true;
  } else {
    console.log(
      `FAILURE: ${fn.name} should return undefined or null for empty arrays`
    );
    return false;
  }
}

(function runTests() {
  // we'll use the variables in our test cases
  const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  const realMin1 = numList1[3];
  const realMax1 = numList1[6];
  const numList2 = [0, 1, 2, 3, 4];
  const realMin2 = numList2[0];
  const realMax2 = numList2[4];

  const testResults = [
    testFunctionWorks2(max, numList1, realMax1),
    testFunctionWorks2(max, numList2, realMax2),
    testFunctionWorks2(min, numList1, realMin1),
    testFunctionWorks2(min, numList2, realMin2),
    testEmpty(max),
    testEmpty(min),
  ];

  const numPassing = testResults.filter(function(result) {
    return result;
  }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
