//longest word in a string
function longestWord(str) {
  let words = str.split(' ');
  let longest = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("I love learning JavaScript functions"));

//min in array
function findSmallestNumber(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(findSmallestNumber([10, 5, 8, 20, 3]));

//unique elements in array
function uniqueElements(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(uniqueArr.includes(arr[i]) === false) {
            uniqueArr.push(arr[i]);
        }}
    return uniqueArr;
}
    
    console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

//average of numbers in array
function calculateAverage(arr) {
    let sum = 0;
    for(let i = 0;i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calculateAverage([10, 20, 30, 40, 50]));

//sumEvenNumbers

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//odd numbers

function getOddNumbers(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] %2 !== 0){
            oddNumbers.push(arr[i]);
        }}return oddNumbers;}
        console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));