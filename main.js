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
// უნდა დააბრუნოს 3
