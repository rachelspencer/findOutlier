// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely 
//comprised of even integers except for a single integer N. Write a method that takes the 
// array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


const testArrOddNum = [2, 4, 0, 100, 4, 11, 2602, 36];
const testArrEvenNum = [160, 3, 1719, 19, 11, 13, -21];

// ES6 arrow
const findOutlier = arr => {
    const oddArr = [];
    const evenArr = [];

    arr.forEach((num) => {
        if (num % 2 === 0){
            evenArr.push(num)
        } else {
            oddArr.push(num)
        }
    });

    return oddArr.length < evenArr.length ? oddArr[0] : evenArr[0];
};

console.log("test should return 11:", findOutlier(testArrOddNum))
console.log("test should return 160:", findOutlier(testArrEvenNum))